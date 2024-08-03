import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowLeft, faLongArrowRight} from '@fortawesome/free-solid-svg-icons'
import Ove100kCard from './Ove100kCard'

export default function SectionRocAbs() {
  return (
    <>
      <section className='sec-roc-abs'>
        <Container>
          <Row>
            <h2 className='women-rock-heading title'>Rock Those ABS</h2>
            <div class="sub-title">
              <span>Vote for your favorite hot bodies</span>
            </div>

            <div className='box-sec-inp'>
                <input type='text' title='Search' placeholder='Search' id='' />
                <input type='submit' title='Submit' value='Serch' className='searchBoxCSS' id='' />
            </div>
            
            <h3>Officially Viral
              <em>-</em>
              <strong>over </strong>
              100k votes
            </h3>

            <div className='scroll-div'>
                <FontAwesomeIcon icon={faLongArrowLeft} className='arrow-left' />
                <span class="scroll-text">Scroll</span>
                <FontAwesomeIcon icon={faLongArrowRight} className='arrow-right' />
            </div>

            <Ove100kCard/>
          </Row>
        </Container>
      </section>
    </>
  )
}
