import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick';

export default function BlogCard() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            {/* over 100k votes */}
            <Row className='row-roc-abc'>
                <Col xs={12} sm={12} md={12} lg={9} xl={9} className='owl_slider_main'>
                    <div className='ove-100k-men-wrap'>
                        <Col md={12} className='male-carousel'>
                            <div className='own-carousel list-thum red-b-bottom'>
                                <Slider {...settings}>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={3} xl={3} >

                </Col>
            </Row>
        </>
    )
}
