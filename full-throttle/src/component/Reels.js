import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import FTA2 from '../assest/images/FTA2.jpg';

export default function Reels() {
    return (
        <>
            <section className='reels'>
                <Container>
                    <div className='reels-wrap'>
                        <div className='reels'>
                            <Col md={12}>
                                <div className='title align-center'>
                                    <h3 className='text-center'>video push-ups</h3>
                                </div>
                                <div className='reels-items-wrap'>
                                    <Swiper
                                        modules={[Navigation]}
                                        id='reels-slider'
                                        className=''
                                        spaceBetween={8}
                                        slidesPerView={6}
                                        navigation={true}
                                        breakpoints={{
                                            0: { slidesPerView: 1, loop: true },
                                            600: { slidesPerView: 3, loop: true },
                                            1000: { slidesPerView: 4, loop: false }
                                        }}
                                    >
                                        <SwiperSlide>


                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='spons-fta-bottom'>
                <Container>
                    <Row>
                        <div className='spons-fta-bottom-wrap text-center'>
                            <a href='#'>
                                <img src={FTA2} alt='FTA' />
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
