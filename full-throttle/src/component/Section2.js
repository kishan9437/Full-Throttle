import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../style/Section2.css'
import ScrollDiv from './ScrollDiv'
import InputBox from './InputBox'

export default function Section2() {
  return (
    <>
      <section className='sec-roc-abs'>
        <Container>
          <Row>
            <h2>Rock Those ABS</h2>
            <div class="sub-title">
              <span>Vote for your favorite hot bodies</span>
            </div>
            <InputBox/>
            
            <h3>Officially Viral
              <em>-</em>
              <strong>over </strong>
              100k votes
            </h3>
            <ScrollDiv/>
          </Row>
        </Container>
      </section>
    </>
  )
}
