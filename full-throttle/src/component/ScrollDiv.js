import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowLeft, faLongArrowRight} from '@fortawesome/free-solid-svg-icons'


export default function ScrollDiv() {
    return (
        <>
            <div className='scroll-div'>
                <FontAwesomeIcon icon={faLongArrowLeft} className='arrow-left' />
                <span class="scroll-text">Scroll</span>
                <FontAwesomeIcon icon={faLongArrowRight} className='arrow-right' />
            </div>
        </>
    )
}
