import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import glutefeans from '../assest/images/GLUTE-FEANS.webp';

export default function SectionGluteFeans({handleShow}) {
  return (
    <>
      <section className='sec-hero ass-feans'>
        <Container>
          <Row>
            <Col xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className='content-wrapper'>
                <div className='left-col-her'>
                  <h2 className='banner-title'>GLUTE FEANS</h2>
                  <p className='banner-sub-title'>
                    Do you have what it takes <br /> to go viral?
                  </p>
                  <Link to={'/'} className='btn' title='Go Viral' onClick={handleShow}>Go Viral</Link>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={5} md={5} lg={5} xl={5}>
              <div className='banner-img-wrap'>
                <img src={glutefeans} alt='GLUTE FEANS' className='top-banner-man-image'></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
