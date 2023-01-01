import axios from 'axios';

const URL = 'http://localhost:8000';

export const saveData = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log(`error occured ${error}`);
    }
}

export const getData = async () => {
    try {
        return await axios.get(`${URL}/`);
    } catch (error) {
        console.log("error fetching data ", error);
    }
}

export const getService = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log("error while getting data", error);
    }
}

export const editData = async (data, id) => {
    try {
        return await axios.put(`${URL}/${id}`, data);
    } catch (error) {
        console.log("error while editing data", error);
    }
}

export const deleteData = async (id) => {
    try {
        return new Promise((resolve) => {
            axios.delete(`${URL}/${id}`);
            resolve();
        }) 
    } catch (error) {
        console.log("error while deleting data", error);
    }
}
