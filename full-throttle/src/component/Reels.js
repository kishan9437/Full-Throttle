import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import FTA2 from '../assest/images/FTA2.jpg';
// import Plyr from 'plyr-react';
// import 'plyr-react/plyr.css';
import ReactPlayer from 'react-player'

export default function Reels() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('reels.json')
            const result = await response.json()
            setData(result.reels)
        }
        catch (error) {
            console.error('Error fetching data', error);
        }
    }
    useEffect(() => {
        fetchData()
        // console.log('Reels', data)
    }, [])
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
                                        {
                                            data.map((reel, index) => (
                                                <SwiperSlide key={reel.id}>
                                                    <div className='reel item' >
                                                        <div className='bg' style={{ backgroundImage: `url(${reel.poster})` }}></div>
                                                    </div>
                                                    <div className='plyr plyr--full-ui plyr--video plyr--html5 plyr--stopped plyr__poster-enabled'>
                                                        <div className='plyr__controls'></div>
                                                        <div className='plyr__video-wrapper'>
                                                            <video className='img-responsive' id={reel.id} poster={reel.poster} src={reel.src} height={'390px'} width={'auto'}></video>
                                                        </div>
                                                        <div className='plyr__captions'></div>
                                                        <button></button>
                                                        <button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-pressed="false" aria-label="Play">
                                                            <svg aria-hidden="true" focusable="false"
                                                                viewBox="0 0 22 22">
                                                                <path d="M8 5v14l11-7z"></path>
                                                            </svg>

                                                            <span class="plyr__sr-only">Play</span>
                                                        </button>
                                                    </div>

                                                </SwiperSlide>
                                            ))
                                        }
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
