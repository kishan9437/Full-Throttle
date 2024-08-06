import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import business from '../assest/images/business.jpg';
import merch from '../assest/images/merch.jpg';
import throtle from '../assest/images/throtle.jpg';

export default function SectionRocAbs() {
  const [data, setData] = useState(null);
  const [showTable, setShowTable] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch('data100kOver.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data', error))
  }, [])

  if (!data) {
    return <div>Loading...</div>;
  }

  const toggleTable = (index) => {
    setShowTable((prevShowTable) => ({
      ...prevShowTable,
      [index]: !prevShowTable[index],
    }))
  }

  const nextSlide = () => {
    if (currentIndex < data.items.length - 3) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
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
              <input type='text' title='Search' placeholder='Search' id='' />
              <input type='submit' title='Submit' value='Serch' className='searchBoxCSS' id='' />
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
                    <div id='over_100k_man' className='owl-carousel owl-theme list-thum red-b-bottom owl-loaded owl-drag'>
                      <div className='owl-stage-outer'>
                        <div className='owl-stage' style={{ width: '1920px', transition: '0.25s', transform: `translateX(-${currentIndex * (370 + 8)}px)` }}>
                          {
                            data.items.map((item, index) => (
                              <div key={index} className='owl-item active' style={{ width: '370px', marginRight: '8px' }}>
                                <div className='blog-card item men_sliderOver object-square'>
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
                                    <Link to={'#'} title='NFT Collectibles' className='btn nefcollection' onClick={() => toggleTable(index)}>
                                      NFT Collectibles
                                    </Link>
                                    {showTable[index] && (
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
                                    )}

                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div className='owl-nav'>
                        <button type='button' className='owl-prev' onClick={prevSlide}>
                          <span aria-label='Previous'>&lt</span>
                        </button>
                        <button type='button' className='owl-next' onClick={nextSlide}>
                          <span aria-label='Next'>&gt</span>
                        </button>
                      </div>
                      <div className='owl-dots'>
                        <button className='owl-dot'>
                          <span></span>
                        </button>
                        <button className='owl-dot'>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </Col>
                </div>
              </Col >
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
