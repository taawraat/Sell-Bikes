import { React, useState, useEffect } from 'react'
import { editData, getService } from '../service/api';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const defaultValue = {
    price: '',
    description: ''
}

function Edit() {
    const navigate = useNavigate();

    const [data, setData] = useState({ defaultValue });

    const { id } = useParams();

    useEffect(() => {
        fillData();
    }, []);

    const fillData = async () => {
        const res = await getService(id);
        setData(res.data[0]);
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const editUserData = async (e) => {
        e.preventDefault();
        await editData(data, data.id);
        navigate("/services");
    }


    return (
        <div className="container mt-4">
            <form>
                <div class="mb-3">
                    <label for="link" class="form-label">Image Link</label>
                    <input onChange={(e) => onValueChange(e)} value={data.link} name="link" type="name" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input onChange={(e) => onValueChange(e)} value={data.title} name="title" type="name" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Price</label>
                    <input onChange={(e) => onValueChange(e)} value={data.price} name="price" type="name" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <textarea value={data.description} style={{ height: 150, resize: 'none', width: '50%' }} onChange={(e) => onValueChange(e)} name="description" type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <button formMethod='POST' onClick={(e) => editUserData(e)} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Edit;
