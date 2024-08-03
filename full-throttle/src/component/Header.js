import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import title from '../assest/images/title.png';
import nopic from '../assest/images/nopic.jpeg';
import Hamburger from 'hamburger-react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const menuRef = useRef(null);
    const [isOpen, setOpen] = useState(false)
    const [open, setOpen1] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleMenu = () => {
        setOpen(!isOpen)
        setMenuActive(!menuActive)
    }

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.hamburger-box')) {
            setMenuActive(false);
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    return (
        <>
            <div className='top-bar'>
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <button className={`btn btn-volunters ${!open ? 'collapsed' : ''}`} onClick={() => setOpen1(!open)} aria-controls="volunterr-info-body" aria-expanded={open}
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

            <Modal show={show} onHide={handleClose} animation={false} dialogClassName="modal-dialog custom-modal" size='lg' centered>
                <Modal.Body>
                    <button type="button" class="close custom-close" data-dismiss="modal" onClick={handleClose}>×</button>
                    <div className='videoSec'>
                        <div className='plyr plyr--video plyr--full-ui'>
                            <div className='plyr__video-wrapper'>
                                <ReactPlayer
                                    url="https://ftabody.s3.us-west-1.amazonaws.com/common-videos/earn_it_video.mp4"
                                    playing={show}
                                    controls
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <header className='position-relative'>
                <Container>
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}   >
                            <Link to={'/'} title='Full Throttle Always' id='logo' className='ftalogo'>
                                <img src={title} alt='Full Throttle Always' title='Full Throttle Always' />
                                <span>World Fitness Community</span>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4} className='al-center'>
                            <button title='World Fitness Commmunity' className='btn popupVideoBtn head-btn' onClick={handleShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle plyr__control" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" className='' />
                                </svg>
                                Video Overview
                            </button>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <div className='nav-wrap nav-wrap-responsive'>
                                <div className='profile-box'>
                                    <div className='group-wrap'>
                                        <div className='data-box-link'>
                                            <img className='rounded-circle w-25' src={nopic} title='FTA' alt='FTA'></img>
                                            <span className='data-right-w'>
                                                <Link to={'/'} className='text-decoration-none'>
                                                    <span className='name'>Login /</span>
                                                </Link>
                                                <Link to={'/'} className='text-decoration-none'>
                                                    <span className='dashboard'>Join Our Community</span>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='hamburger hamburger--vortex is-active'>
                                    <div className='hamburger-box' onClick={toggleMenu}>
                                        <div className='hamburger-inner' style={{ width: "24px" }}>
                                            {/* <FontAwesomeIcon icon={faBars} className='w-75 h-75' /> */}
                                            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
                                        </div>
                                    </div>
                                    {
                                        menuActive && (
                                            <div className='menu-display menu-active' ref={menuRef}>
                                                <div className='menu-top-menu-container'>
                                                    <ul id='menu-top-menu' className='menu'>
                                                        <li>
                                                            <Link to={'/'}>Member Login</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>About / FAQ</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>Fitness Finder</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>Community Board</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>Shopping Mall</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>Push-ups</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>Join Community / Create Aggregate</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>Feedback</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>Contact Us</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>Advertize</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/'}>FTA WFC Blog</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}
