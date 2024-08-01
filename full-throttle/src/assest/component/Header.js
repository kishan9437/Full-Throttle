import React from 'react'
import '../style/Header.css'
import {Col, Container,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className='position-relative pt-3 pb-4'>
                <Container>
                    <Row>
                        <Col>
                            <Link />
                        </Col>
                        <Col>b</Col>
                        <Col>c</Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}
