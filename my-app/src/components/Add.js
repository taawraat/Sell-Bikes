import {React, useState} from 'react'
import { saveData } from '../service/api';
import { useNavigate } from 'react-router-dom';


const defaultValue = {
    link: '',
    title: '',
    price: '',
    description: ''
}

function Add() {
    const navigate = useNavigate();

    const [data, setData] = useState({defaultValue});

    const onValueChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        console.log(data);
    }

    const saveUserData = async (e) => {
        e.preventDefault();
        await saveData(data);
        navigate("/services");
        window.location.reload();
    }


    return (
        <div className="container mt-4">
            <form>
                <div class="mb-3">
                    <label for="link" class="form-label">Image Link</label>
                    <input onChange={(e) => onValueChange(e)} name="link" type="name" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input onChange={(e) => onValueChange(e)} name="title" type="name" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Price</label>
                    <input onChange={(e) => onValueChange(e)} name="price" type="name" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <textarea style={{height: 150, resize: 'none', width: '50%'}} onChange={(e) => onValueChange(e)} name="description" type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button formMethod='POST' onClick={(e) => saveUserData(e)} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Add
