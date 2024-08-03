import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import jeff from '../assest/images/jeff_profile_resize.jpg';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <FaArrowRight
            className={className}
            style={{ ...style, display: 'block', color: 'black' }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <FaArrowLeft
            className={className}
            style={{ ...style, display: 'block', color: 'black' }}
            onClick={onClick}
        />
    );
};
export default function BlogCard() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            {/* over 100k votes */}
            <Row className='row-roc-abs'>
                <Col xs={12} sm={12} md={12} lg={9} xl={9} className='owl_slider_main'>
                    <div className='ove-100k-men-wrap'>
                        <Col md={12} className='male-carousel'>
                            <div id='over_100k_man' className='owl-carousel owl-theme list-thum red-b-bottom owl-loaded owl-drag'>
                                <div className='owl-stage-outer'>
                                    <div className='owl-stage' style={{ width: '1891px', transition: 'all', transform: 'translate3d(0px,0px,0px)' }}>
                                        <div className='owl-item active' style={{ width: '373px', marginRight: '8px' }}>
                                            <div className='blog-card item men_sliderOver object-square'>
                                                <div className='thum-blog'>
                                                    <Link to={'/'}>
                                                        <img src="https://ftabody.s3.us-west-1.amazonaws.com/jeff_profile_resize.jpg?v=1722685515" alt="Jeff Russell" title="Jeff Russell"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </>
    )
}
