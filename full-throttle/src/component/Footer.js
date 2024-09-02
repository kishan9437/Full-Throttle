import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import footer from '../assest/images/footerFTA.png';

export default function Footer() {
  return (
    <>
        <footer>
            <Container className=''>
                <section>
                    <Row className='py-2 footer_top_section'>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4} className='logo-block'>
                            <Link to={'/'} title='Full Throttle Always' className='ftalogo'>
                                <img src={footer} alt='Full Throttle Always' title='Full Throttle Always'></img>
                                <span>World Fitness Community</span>
                            </Link>
                        </Col>
                    </Row>
                </section>
            </Container>
        </footer>
    </>
  )
}
