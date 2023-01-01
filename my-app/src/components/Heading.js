import React from 'react'

function Heading(props) {
  return (
    <>
        <div className='m-4 text-center'>
            <h1 className='fw-bolder'>{props.title}</h1>
        </div>
    </>
  )
}

export default Heading
