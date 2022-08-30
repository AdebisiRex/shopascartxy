import React from 'react'

function Faq(props) {
  return (
    <div className='shadow-sm d-flex faq mb-3 p-2'>
        <p className='fw-normal m-0'>{props.text}</p>
        <h3 className='m-0'>+</h3>

    </div>
  )
}

export default Faq