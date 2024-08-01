import React, { useState } from 'react'
import '../style/TopBar.css'
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TopBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='top-bar'>
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <button className={`btn btn-volunters ${!open ? 'collapsed' : '' }`} onClick={() => setOpen(!open)} aria-controls="volunterr-info-body" aria-expanded={open}
                                >Volunteer</button>
                            </Col>
                            <Col md={6}>
                                <Link className="btn btn-feedback-top" to={'/'} title="Feedback / Suggestions">Feedback / Suggestions</Link>
                            </Col>

                        </Row>
                    </Container>
                    <Collapse in={open}>
                        <Container className='wrapper'>
                            <div className='body' id='volunterr-info-body'>
                                <p>
                                    <strong>Volunteers</strong>
                                </p>
                                <p>
                                    FTA is not a big company. It is a community run by the members for the members. If you have the ability, time, and the desire to volunteer we need you.&nbsp;
                                </p>
                                <p>
                                    Here is a list of what we need help with. If you have another skill not listed here please reach out and tell us about it as well.&nbsp;
                                </p>
                                <ul>
                                    <li>
                                        <strong>Testers and Idea people. </strong>
                                        This is a new website and we need to test it and find the errors and how it could be better.&nbsp;
                                    </li>
                                    <li>
                                        <strong>Influencers.</strong>
                                        We need to get as many people as possible signed up as members. This will allow us to test the site and get better feedback. If you are an influencer in the fitness industry please help us by sending a message out to your fans.&nbsp;
                                    </li>
                                    <li>
                                        <strong>Backend Administrators.</strong>
                                        As this site grows in size we will need more and more help administering it.&nbsp;
                                    </li>
                                    <li>
                                        <strong>Podcast Star or maybe Stars, we’re not sure.</strong>
                                        We want to build a Podcast. We have a couple ideas but need more. If you are a talented Podcaster and you want to be part of FTA please reach out.&nbsp;
                                    </li>
                                    <li>
                                        <strong>Blog writers / Content Contributors.</strong>
                                        We need to get the word out about what we are trying to build. With good content we will be discovered in search engines for those people looking for what we have to offer them. &nbsp;
                                    </li>
                                    <li>
                                        <strong>Advertising Experts. </strong>
                                        We need ideas from people who know how to get the maximum returns from the smallest amount of money.&nbsp;
                                    </li>
                                </ul>
                                <div className='footer'>
                                    <Link to={'/'} className='btn'>Volunteer</Link>
                                </div>
                            </div>
                        </Container>
                    </Collapse>
                </Col>
            </div>
        </>
    )
}
