import React from 'react';
import { useNavigate } from "react-router-dom";

function AddButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/addNew")
    }

    return (
        <div className='text-center'>
            <button onClick={() => handleClick()} type="button" class="btn btn-success m-4">Add Service</button>
        </div>
    )
}

export default AddButton;
