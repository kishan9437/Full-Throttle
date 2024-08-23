import React, { useState, useEffect, useRef, Children } from 'react'
import { Container, Row, Col, Table, Pagination } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import business from '../assest/images/business.jpg';
import merch from '../assest/images/merch.jpg';
import throtle from '../assest/images/throtle.jpg';
import MerchClothing from '../assest/images/merch_clothing_FTA.png';
import Swal from 'sweetalert2';
import { CSSTransition } from 'react-transition-group';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles



export default function SectionRocAbs() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedItems, setHighlightedItems] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [isTableOpen, setIsTableOpen] = useState(null);

  const fetchData1 = async () => {
    try {
      const response = await fetch('data100kOver.json');
      const result = await response.json();
      setData1(result.items);
    }
    catch (error) {
      console.error('Error fetching data first Json', error)
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await fetch('data100kUnder.json');
      const result = await response.json();
      setData2(result.items);
    }
    catch (error) {
      console.error('Error fetching data second Json', error)
    }
  };

  useEffect(() => {
    fetchData1();
    fetchData2();
  }, [])

  if (!data1) {
    return <div>Loading...</div>;
  }
  if (!data2) {
    return <div>Loading...</div>;
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase().trim());
  };
  const handleSearchClick = () => {
    if (!searchQuery) {
      Swal.fire({
        text: "Please enter bodybuilder name.",
        icon: "warning",
        confirmButtonColor: "#252525",
        confirmButtonText: "Ok, got it!",
      });
      return;
    }

    const over100kFound = data1.filter((item) => item.name.toLowerCase().includes(searchQuery));
    const under100kFound = data2.filter((item) => item.name.toLowerCase().includes(searchQuery));

    setHighlightedItems([...over100kFound, ...under100kFound]);

    if (over100kFound.length > 0 && under100kFound.length > 0) {
      setSearchResult('found_in_both')
    }
    else if (over100kFound.length > 0) {
      setSearchResult('found_in_over_100k')
    }
    else if (under100kFound.length > 0) {
      setSearchResult('found_in_under_100k')
    }
    else {
      setSearchResult('not_found')
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  }
  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  }

  const toggleTable = (id) => {
    setIsTableOpen(prevId => prevId === id ? null : id);
  };


  const handleLikeClick = () => {
    Swal.fire({
      title: 'Login Required!',
      html: 'Please <a href="">login</a> to <span class="actiontext">Vote</span>. If you do not have an account please <a href="">create an account</a>.',
      icon: 'info',
      confirmButtonColor: 'rgb(37, 37, 37)',
      confirmButtonText: 'Skip',
    });
  }
  return (
    <>
      <section className='sec-roc-abs mens'>
        <Container>
          <Row>
            <h2 className='women-rock-heading title'>Rock Those ABS</h2>
            <div class="sub-title">
              <span>Vote for your favorite hot bodies</span>
            </div>

            <div className='box-sec-inp'>
              <input type='text' title='Search' placeholder='Search' id='searchInput' value={searchQuery} onChange={handleSearchInputChange} />
              <input type='submit' title='Submit' value='Search' className='searchBoxCSS' id='searchBox1' onClick={handleSearchClick} />

              {searchResult === 'found_in_over_100k' && (
                <p id='men_sliderResOver'>Result(s) found in Over 100k Votes</p>
              )}
              {searchResult === 'found_in_under_100k' && (
                <p id='men_sliderResOver'>Result(s) found in Under 100k Votes</p>
              )}
              {searchResult === 'found_in_both' && (
                <p id='men_sliderResOver'>Result(s) found in both Over 100k Votes and Under 100k Votes</p>
              )}
              {searchResult === 'not_found' && (
                <p id='men_sliderResOver'><span style={{ color: 'red' }}>No Match Found</span></p>
              )}
            </div>

            <h3>Officially Viral
              <em>-</em>
              <strong>over </strong>
              100k votes
            </h3>

            <div className='scroll-div'>
              <FontAwesomeIcon icon={faLongArrowLeft} className='arrow-left' onClick={prevSlide} />
              <span class="scroll-text">Scroll</span>
              <FontAwesomeIcon icon={faLongArrowRight} className='arrow-right' onClick={nextSlide} />
            </div>

            {/* over 100k votes */}
            <Row className='row-roc-abs'>
              <Col xs={12} sm={12} md={12} lg={9} xl={9} className='owl_slider_main'>
                <div className='ove-100k-men-wrap'>
                  <Col md={12} className='male-carousel' id='over_100k_man'>
                    <Swiper
                      modules={[Navigation]}
                      id='over_100k_man'
                      className='list-thum red-b-bottom'
                      spaceBetween={8}
                      slidesPerView={3}
                      navigation={true}
                      onSwiper={(swiper) => {
                        carouselRef.current = swiper; 
                      }}
                      breakpoints={{
                        0: { slidesPerView: 1, loop: true },
                        600: { slidesPerView: 3, loop: true },
                        1000: { slidesPerView: 3, loop: false }
                      }}
                    >
                      {data1.map((item, index) => (
                        <SwiperSlide key={item.id} className={`blog-card item men_sliderOver object-square ${highlightedItems.some((highlighted) => highlighted.name === item.name) ? 'highlight' : ''}`} >
                          <div className='thum-blog '>
                            <Link to={item.link}>
                              <img src={item.image} alt={item.title} title={item.title} />
                            </Link>
                          </div>
                          <div className='inn-box-blo'>
                            <h4>
                              <Link to={item.link} title={item.title}>{item.name}</Link>
                            </h4>
                            <p>
                              Current Rank Position
                              <strong> {item.rank}</strong>
                            </p>
                            <h6>
                              Votes =
                              <span> {item.votes}</span>
                            </h6>
                            <div className='row-vote'>
                              Click here to vote for me
                              <Link to={'/'} title='Vote' className='icon-like votes_like login-action' onClick={handleLikeClick}>
                                <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" height="25px" width="25px" y="0px" x="0px" id="Layer_1" version="1.1" >
                                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                    <path fill="#BABCBE" d="M2890,5106.003c-110-31.006-215-114.004-275.996-220c-20-32.002-104.004-240-189.004-461.006   C2341,4204.001,2260,3996.003,2246,3963.005c-102.002-243.008-367.002-542.002-748.003-846.006L1370,3014.998V1644.002V273.006   l135-42.002C1815,134.002,2162.998,62,2505,24.002c227.002-25.996,1717.998-32.998,1820-9.004   c170.996,39.004,317.998,172.002,382.998,345c39.004,103.008,31.006,270-18.994,378.008   c-28.008,62.998-29.004,66.992-12.002,78.994c107.002,71.006,177.001,142.998,220.996,227.998   c74.004,146.006,69.004,352.002-12.002,492.002l-23.994,42.002l52.998,42.002c147.002,117.002,222.998,307.998,195.996,490   c-20,135-120.996,295.996-222.998,357.002l-27.002,15l29.004,55.996c60.996,120.996,77.002,260.996,45,385.996   c-42.998,164.004-190,314.004-365,371.006c-50,15.996-112.002,17.998-655.996,22.002l-601.006,2.998l24.004,117.002   c30.996,153.994,87.998,497.998,105,636.992C3449.003,4137,3455,4287,3455,4419.998c-0.996,211.006-2.998,244.004-22.998,325   c-30,118.008-61.006,183.008-112.998,240C3220.996,5091.003,3030,5144.998,2890,5106.003z"></path>
                                    <path fill="#BABCBE" d="M80,2848.005C62.002,2834.998,37.002,2812,26.001,2797L5,2769.001V1604.998V441.004l21.001-27.998   c11.997-15,36.001-37.002,55-48.008c32.998-18.994,51.997-20,508.999-20h475l2.998,1263.008L1070,2869.998H592.002H112.998   L80,2848.005z"></path>
                                  </g></svg>
                              </Link>
                            </div>
                            <Link to={'#'} title='NFT Collectibles' className='btn nefcollection' onClick={()=>toggleTable(item.id)}>
                              NFT Collectibles
                            </Link>
                            <CSSTransition in={isTableOpen===item.id} timeout={300} classNames="slide" unmountOnExit>
                              <Table striped bordered hover className='nef_collection' style={{ marginTop: '10px', marginBottom: '0px', clear: 'both' }}>
                                <thead>
                                  <tr className='warning'>
                                    <td>
                                      <b>Limited Addition</b>
                                    </td>
                                    <td>
                                      <b>Price</b>
                                    </td>
                                    <td>
                                      <b>Availablity</b>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item.nft_collectibles.map((collectible, index) => (
                                    <tr key={index} className={collectible.availability === 'SOLD' ? 'danger' : 'success'}>
                                      <td>{collectible.limited_addition}</td>
                                      <td>{collectible.price}</td>
                                      <td className={collectible.availability === 'SOLD' ? 'text-danger' : 'text-success'}>
                                        <b>{collectible.availability}</b>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </CSSTransition>

                          </div>
                        </SwiperSlide>
                      ))}

                    </Swiper>
                    {/* </OwlCarousel> */}
                  </Col>
                </div>
                <div className='under-100k-men-wrap'>
                  <h3 className='sub-head-title'>
                    <strong>Under </strong>
                    100k votes
                    <span>Vote for anyone you feel has what it takes to go viral</span>
                  </h3>
                  <div className='scroll-div'>
                    <FontAwesomeIcon icon={faLongArrowLeft} className='arrow-left' onClick={() => prevSlide(carouselRef2)} />
                    <span class="scroll-text">Scroll</span>
                    <FontAwesomeIcon icon={faLongArrowRight} className='arrow-right' onClick={() => nextSlide(carouselRef2)} />
                  </div>
                  <Col md={12} className='male-carousel' id='under_100k_man'>
                    <OwlCarousel className='owl-theme list-thum red-b-bottom owl-loaded' margin={8} items={3} nav responsive={{
                      0: { items: 1, loop: true },
                      600: { items: 3, loop: true },
                      1000: { items: 4, loop: false }
                    }} ref={carouselRef2}>
                      {data2.map((item, index) => (
                        <div key={item.id} className={`blog-card item men_sliderUnder object-square ${highlightedItems.some((highlighted) => highlighted.name === item.name) ? 'highlight' : ''}`}>
                          <div className='thum-blog'>
                            <Link to={item.link}>
                              <img src={item.image} alt={item.title} title={item.title}></img>
                            </Link>
                          </div>
                          <div className='inn-box-blo'>
                            <h4>
                              <Link to={item.link}>{item.name}</Link>
                            </h4>
                            <p>
                              Current Rank Position
                              <strong> {item.rank}</strong>
                            </p>
                            <h6>
                              Votes =
                              <span> {item.votes}</span>
                            </h6>
                            <div className='row-vote'>
                              Click here to vote for me
                              <Link to={'/'} title='Vote' className='icon-like votes_like login-action' onClick={handleLikeClick}>
                                <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" height="25px" width="25px" y="0px" x="0px" id="Layer_1" version="1.1" >
                                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                    <path fill="#BABCBE" d="M2890,5106.003c-110-31.006-215-114.004-275.996-220c-20-32.002-104.004-240-189.004-461.006   C2341,4204.001,2260,3996.003,2246,3963.005c-102.002-243.008-367.002-542.002-748.003-846.006L1370,3014.998V1644.002V273.006   l135-42.002C1815,134.002,2162.998,62,2505,24.002c227.002-25.996,1717.998-32.998,1820-9.004   c170.996,39.004,317.998,172.002,382.998,345c39.004,103.008,31.006,270-18.994,378.008   c-28.008,62.998-29.004,66.992-12.002,78.994c107.002,71.006,177.001,142.998,220.996,227.998   c74.004,146.006,69.004,352.002-12.002,492.002l-23.994,42.002l52.998,42.002c147.002,117.002,222.998,307.998,195.996,490   c-20,135-120.996,295.996-222.998,357.002l-27.002,15l29.004,55.996c60.996,120.996,77.002,260.996,45,385.996   c-42.998,164.004-190,314.004-365,371.006c-50,15.996-112.002,17.998-655.996,22.002l-601.006,2.998l24.004,117.002   c30.996,153.994,87.998,497.998,105,636.992C3449.003,4137,3455,4287,3455,4419.998c-0.996,211.006-2.998,244.004-22.998,325   c-30,118.008-61.006,183.008-112.998,240C3220.996,5091.003,3030,5144.998,2890,5106.003z"></path>
                                    <path fill="#BABCBE" d="M80,2848.005C62.002,2834.998,37.002,2812,26.001,2797L5,2769.001V1604.998V441.004l21.001-27.998   c11.997-15,36.001-37.002,55-48.008c32.998-18.994,51.997-20,508.999-20h475l2.998,1263.008L1070,2869.998H592.002H112.998   L80,2848.005z"></path>
                                  </g></svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}

                    </OwlCarousel>
                  </Col>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={3} xl={3} className='col-add rt-side-col-sec'>
                <div className='list-fta-spon-wrapper'>
                  <ul className='list-fta-spon'>
                    <li>
                      <Link to={'/'}>
                        <img src={business} alt='FTA Sponsor' title='FTA Sponser'></img>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'}>
                        <img src={merch} alt='FTA Sponsor' title='FTA Sponser'></img>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'}>
                        <img src={throtle} alt='FTA Sponsor' title='FTA Sponser'></img>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <div className='fta-spon-top'>
              <Link to={''}>
                <img src={MerchClothing} alt='FTA Sponser' title=''></img>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}
