import React from 'react'

function Contact() {
  return (
    <div>
        <form className='container text-center'>
            <input placeholder='Enter Name' type="name" class="form-control m-3"/>
            <input placeholder='Enter Email' type="name" class="form-control m-3"/>
            <textarea style={{resize: 'none', height:300}} class="form-control m-3" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <button type="button" class="btn btn-primary">Send</button>
        </form>
        
    </div>
  )
}

export default Contact