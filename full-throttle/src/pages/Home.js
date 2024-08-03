import React from 'react'
import { Container } from 'react-bootstrap'
import AbfeansSection from '../component/AbfeansSection'
import SectionRocAbs from '../component/SectionRocAbs'

export default function Home() {
  return (
    <>
      <article>
        <div className='bg-gray'>
          <Container>
            <AbfeansSection/>
            <SectionRocAbs/>
          </Container>
        </div>
      </article>
    </>
  )
}
