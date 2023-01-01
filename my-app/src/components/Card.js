import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

function Card(props) {
    return (
        <>
            <div class="card m-2" style={{width: '15rem;'}}>
                <img style={{height: '250px'}} src={props.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title fw-bolder text-primary">Title: {props.title}</h3>
                    <h4 class="card-title fw-bolder text-success">Price: ${props.price}</h4>
                    <p class="card-text fw-bold">{props.desc}</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <EditButton _id={props._id}/>
                    <DeleteButton _id={props._id}/>
                </div>
            </div>
        </>
    )
}

export default Card
