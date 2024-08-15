import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AbfeansSection from '../component/AbfeansSection'
import SectionRocAbs from '../component/SectionRocAbs'
import SectionGluteFeans from '../component/SectionGluteFeans'

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <article>
        <div className='bg-gray'>
          <Container>
            <AbfeansSection show={show} handleClose={handleClose} handleShow={handleShow}/>
            <SectionRocAbs />
            <SectionGluteFeans handleShow={handleShow} handleClose={handleClose}/>
          </Container>
        </div>
      </article>
    </>
  )
}
