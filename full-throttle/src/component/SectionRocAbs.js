import React, { useState, useEffect, useRef, Children } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
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
import Swal from 'sweetalert2';
import { CSSTransition } from 'react-transition-group';


function useDisplay(initialDisplay = 'block') {
  const [display, setDisplay] = useState(initialDisplay);
  const toggleDisplay = () => {
    setDisplay(prevDisplay => (prevDisplay === 'none' ? initialDisplay : 'none'));
  };
  return [display, toggleDisplay];
}

const DisplayToggleComponent = ({ isVisible, children }) => {
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      {children}
    </div>
  );
}
export default function SectionRocAbs() {
  const [data, setData] = useState(null);
  const carouselRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedItems, setHighlightedItems] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [visibleCardIndex, setVisibleCardIndex] = useState(null);


  useEffect(() => {
    fetch('data100kOver.json')
      .then(response => response.json())
      .then(data => setData(data.items))
      .catch(error => console.error('Error fetching data', error))
  }, [])

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase().trim());
  };
  const handleSearchClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    e.preventDefault(); // Prevent default behavior

    if (!searchQuery) {
      Swal.fire({
        text: "Please enter bodybuilder name.",
        icon: "warning",
        confirmButtonColor: "#252525",
        confirmButtonText: "Ok, got it!",
      });
      return;
    }

    // console.log('search', searchQuery)
    const newHighlightedItems = data.filter((item) => item.name.toLowerCase().includes(searchQuery)).map((item) => item.name);
    // console.log('json name:', newHighlightedItems)
    setHighlightedItems(newHighlightedItems);

    if (newHighlightedItems.length > 0) {
      setSearchResult('found');
    } else {
      setSearchResult('not_found');
    }
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  }
  const nextSlide = () => {
    carouselRef.current.next();
  }

  const handleToggleClick = (index) => {
    setVisibleCardIndex(prevIndex => prevIndex ? null : index);
  }
  return (
    <>
      <section className='sec-roc-abs'>
        <Container>
          <Row>
            <h2 className='women-rock-heading title'>Rock Those ABS</h2>
            <div class="sub-title">
              <span>Vote for your favorite hot bodies</span>
            </div>

            <div className='box-sec-inp'>
              <input type='text' title='Search' placeholder='Search' id='searchInput' value={searchQuery} onChange={handleSearchInputChange} />
              <input type='submit' title='Submit' value='Search' className='searchBoxCSS' id='searchBox1' onClick={handleSearchClick} />
              {searchResult === 'found' && (
                <p id='men_sliderResOver'>Result(s) found in Over 100k Votes</p>
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
                  <Col md={12} className='male-carousel'>
                    <OwlCarousel id='over_100k_man' className='owl-theme list-thum red-b-bottom' margin={8} items={3} nav responsive={{
                      0: { items: 1, loop: true },
                      600: { items: 3, loop: true },
                      1000: { items: 3, loop: false }
                    }} ref={carouselRef}>
                      {data.map((item, index) => (
                        // console.log('filter item : ',item),
                        <div key={item.id} className={`blog-card item men_sliderOver object-square ${highlightedItems.includes(item.name) ? 'highlight' : ''}`}>
                          <div className='thum-blog'>
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
                              <Link to={'/'} title='Vote' className='icon-like votes_like login-action'>
                                <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" height="25px" width="25px" y="0px" x="0px" id="Layer_1" version="1.1" >
                                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                    <path fill="#BABCBE" d="M2890,5106.003c-110-31.006-215-114.004-275.996-220c-20-32.002-104.004-240-189.004-461.006   C2341,4204.001,2260,3996.003,2246,3963.005c-102.002-243.008-367.002-542.002-748.003-846.006L1370,3014.998V1644.002V273.006   l135-42.002C1815,134.002,2162.998,62,2505,24.002c227.002-25.996,1717.998-32.998,1820-9.004   c170.996,39.004,317.998,172.002,382.998,345c39.004,103.008,31.006,270-18.994,378.008   c-28.008,62.998-29.004,66.992-12.002,78.994c107.002,71.006,177.001,142.998,220.996,227.998   c74.004,146.006,69.004,352.002-12.002,492.002l-23.994,42.002l52.998,42.002c147.002,117.002,222.998,307.998,195.996,490   c-20,135-120.996,295.996-222.998,357.002l-27.002,15l29.004,55.996c60.996,120.996,77.002,260.996,45,385.996   c-42.998,164.004-190,314.004-365,371.006c-50,15.996-112.002,17.998-655.996,22.002l-601.006,2.998l24.004,117.002   c30.996,153.994,87.998,497.998,105,636.992C3449.003,4137,3455,4287,3455,4419.998c-0.996,211.006-2.998,244.004-22.998,325   c-30,118.008-61.006,183.008-112.998,240C3220.996,5091.003,3030,5144.998,2890,5106.003z"></path>
                                    <path fill="#BABCBE" d="M80,2848.005C62.002,2834.998,37.002,2812,26.001,2797L5,2769.001V1604.998V441.004l21.001-27.998   c11.997-15,36.001-37.002,55-48.008c32.998-18.994,51.997-20,508.999-20h475l2.998,1263.008L1070,2869.998H592.002H112.998   L80,2848.005z"></path>
                                  </g></svg>
                              </Link>
                            </div>
                            <Link to={'#'} title='NFT Collectibles' className='btn nefcollection' onClick={() => handleToggleClick(index)}>
                              NFT Collectibles
                            </Link>
                            <DisplayToggleComponent isVisible={visibleCardIndex === index}>
                              {/* <p>this content will be toggle</p> */}

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
                            </DisplayToggleComponent>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </Col>
                </div>
                <div className='under-100k-men-wrap'>
                  <h3 className='sub-head-title'>
                    <strong>Under </strong>
                    100k votes
                    <span>Vote for anyone you feel has what it takes to go viral</span>
                  </h3>
                  <div className='scroll-div'>
                    <FontAwesomeIcon icon={faLongArrowLeft} className='arrow-left' />
                    <span class="scroll-text">Scroll</span>
                    <FontAwesomeIcon icon={faLongArrowRight} className='arrow-right' />
                  </div>
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
            </Row >
          </Row>
        </Container>
      </section>
    </>
  )
}
