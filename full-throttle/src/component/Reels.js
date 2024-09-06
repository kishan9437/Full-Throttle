import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import FTA2 from '../assest/images/FTA2.jpg';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footer from '../assest/images/footerFTA.png';

export default function Reels() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <Modal show={show} fullscreen={true} onHide={handleClose} animation={false} dialogClassName="vertical-alignment-helper pop-ab-go force-v-center" id='reel-details-modal' size='lg' centered>
                <Modal.Body >
                    <button type="button" class="close custom-close" data-dismiss="modal" onClick={handleClose}>×</button>
                    <div className='reel-details'>
                        <div className='reel-details-wrap'>
                            <div className='reel-details-data'>
                                <div className='fta-reel-view' id='fta-reels'>
                                    <div className='reel pus-ups-title a-height' style={{ textAlign: 'center' }}>
                                        <div className='reel-wrapper-title'>
                                            <Link to={'/'} title='Full Throttle Always' className='ftalogo'>
                                                <img src={footer} alt='Full Throttle Always' title='Full Throttle Always'></img>
                                                <span>World Fitness Community</span>
                                            </Link>
                                            <h2>push-ups</h2>
                                            <div className='reel-details-add-a-pushup text-danger fw-bolder mb-4'>
                                                <Link to={'/'} className='addPushUpsRedirect'>Add a Push-Up</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        data.map((reel, index) => (
                                            <div className='reel item'>
                                                <div className='reel-wrapper'>
                                                    <div className='video'>
                                                        <Plyr
                                                            source={{
                                                                type: 'video',
                                                                sources: [
                                                                    {
                                                                        src: reel.src,
                                                                        type: 'video/mp4',
                                                                    },
                                                                ],
                                                            }}
                                                            id={reel.id}
                                                            poster={reel.poster}
                                                            height={'390px'}
                                                            width={'auto'}
                                                            // controls={['play','volume']}
                                                            options={{
                                                                controls:['play','volume'],
                                                                autoplay: true,
                                                                muted:true,
                                                                preload: 'auto',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>

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
                                            0: { slidesPerView: 2, spaceBetween: 8, loop: true },
                                            600: { slidesPerView: 4, spaceBetween: 8, loop: true },
                                            1000: { slidesPerView: 6, loop: false }
                                        }}
                                    >
                                        {
                                            data.map((reel, index) => (
                                                <SwiperSlide key={reel.id}>
                                                    <div className='reel item' onClick={handleShow}>
                                                        <div className='bg' style={{ backgroundImage: `url(${reel.poster})` }}></div>
                                                        <Plyr
                                                            source={{
                                                                type: 'video',
                                                                sources: [
                                                                    {
                                                                        src: reel.src,
                                                                        type: 'video/mp4',
                                                                    },
                                                                ],
                                                            }}
                                                            id={reel.id}
                                                            poster={reel.poster}
                                                            height={'390px'}
                                                            width={'auto'}
                                                            options={{
                                                                autoplay: false,
                                                                preload: 'auto',
                                                            }}
                                                        />
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
