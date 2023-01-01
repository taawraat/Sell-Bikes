import React from 'react';
import { useNavigate } from "react-router-dom";

function EditButton(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/edit/${props._id}`)
    }

    return (
        <div className='text-center'>
            <button onClick={() => handleClick()} type="button" class="btn btn-primary m-2">Edit</button>
        </div>
    )
}

export default EditButton;
