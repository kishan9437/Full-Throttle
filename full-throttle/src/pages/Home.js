import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AbfeansSection from '../component/AbfeansSection'
import SectionRocAbs from '../component/SectionRocAbs'
import SectionGluteFeans from '../component/SectionGluteFeans'
import SectionRocAbsWomen from '../component/SectionRocAbsWomen'
import Swal from 'sweetalert2';
import Reels from '../component/Reels'

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLikeClick = () => {
    Swal.fire({
      title: 'Login Required!',
      html: 'Please <a href="">login</a> to <span class="actiontext">Vote</span>. If you do not have an account please <a href="">create an account</a>.',
      icon: 'info',
      confirmButtonColor: 'rgb(37, 37, 37)',
      confirmButtonText: 'Skip',
    });
  };

  return (
    <>
      <article>
        <div className='bg-gray'>
          <Container>
            <AbfeansSection show={show} handleClose={handleClose} handleShow={handleShow}/>
            <SectionRocAbs handleLikeClick={handleLikeClick}/>
            <SectionGluteFeans handleShow={handleShow} handleClose={handleClose}/>
            <SectionRocAbsWomen handleLikeClick={handleLikeClick}/>
            <Reels/>
          </Container>
        </div>
      </article>
    </>
  )
}
