import React from 'react'
import '../style/InputBox.css'

export default function InputBox() {
    return (
        <>
            <div className='box-sec-inp'>
                <input type='text' title='Search' placeholder='Search' id='' />
                <input type='submit' title='Submit' value='Serch' className='searchBoxCSS' id='' />
            </div>
        </>
    )
}
