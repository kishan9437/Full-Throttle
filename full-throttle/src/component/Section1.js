import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../style/Section1.scss'
import { Link } from 'react-router-dom'
import abfeans from '../assest/images/abfeans.png';
import { Modal, Button } from 'react-bootstrap'

export default function Section1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <section className='sec-hero'>
                <Container>
                    <Row>
                        <Col xs={12} sm={7} md={7} lg={7} xl={7}>
                            <div className='content-wrapper'>
                                <div className='left-col-her'>
                                    <h1 className='banner-title'>Ab feans</h1>
                                    <p>
                                        Do you have what it takes
                                        <br />
                                        to go viral?
                                    </p>
                                    <Link to={'/'} title='Go Viral' className='btn' onClick={handleShow}>Go Viral</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                            <div className='banner-img-wrap'>
                                <img src={abfeans} alt='banner' className='top-banner-man-image' title='Banner'></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Modal show={show} onHide={handleClose} animation={false} dialogClassName="modal-dialog pop-ab-go" size='lg' centered>
                <Modal.Header closeButton>
                    <h5 className='modal-title'>Go Viral - Get Paid</h5>
                </Modal.Header>
                <Modal.Body>
                    <p>If you think you have what it takes and you like competition the home page is for you. Anyone can apply to be in the FTA homepage competition but only the most beautiful bodies in the world will be accepted to compete.</p>
                    <p>If you have what it takes to get 100K valid votes, which in our view means you have "Gone Viral", we will begin to sell your NFT's. This is when you start to get paid for all of your hard work. You earned it.</p>
                    <p><Link to={'/'}>Click here</Link> to learn more.</p>
                </Modal.Body>
            </Modal>

        </>
    )
}
