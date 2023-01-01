import React from 'react';
import Card from './Card';
import { useEffect, useState } from 'react';
import { getData } from '../service/api';

const Grid = () => {

    const [allData, setData] = useState([]); 

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async () => {
        const response = await getData();
        setData(response.data);
    }

    return (
        <>
            <div class="container text-center">
                <div class="row row-cols-3">
                    {
                        allData.map(data => (
                            <div class="col">
                                <Card price={data.price} desc={data.description} _id={data._id} img={data.link} title={data.title}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Grid
