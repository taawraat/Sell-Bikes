import React from 'react';
import { deleteData } from '../service/api';

function DeleteButton(props) {

    const handleClick = async () => {
        if (window.confirm('The data will be deleted. Are you sure?')) {
            try {
                await deleteData(props._id);
                window.location.reload();
            } catch (error) {
                console.log("error!", error);
            }
        }
    }

    return (
        <div className='text-center'>
            <button onClick={(e) => handleClick(e)} type="button" class="btn btn-danger m-2">Delete</button>
        </div>
    )
}

export default DeleteButton;
