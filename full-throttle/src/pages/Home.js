import React from 'react'
import { Container } from 'react-bootstrap'
import '../style/Home.css'
import Section1 from '../component/Section1'


export default function Home() {
  return (
    <>
      <article>
        <div className='bg-gray'>
          <Container>
            <Section1 />
          </Container>
        </div>
      </article>
    </>
  )
}
