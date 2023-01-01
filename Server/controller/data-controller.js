import { response } from 'express';
import Data from '../schema/data-schema.js';

export const addData = (req, res) => {
    const data = req.body;
    const newData = new Data(data);

    try {
        newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const getAllData = async (req, res) => {
    try {
        const allData = await Data.find({});
        res.status(200).json(allData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSingle = async (req, res) => {
    try {
        const data = await Data.find({_id: req.params.id});
        res.status(200).json(data);
    } catch (error) {   
        res.status(404).json({message: error.message});
    }
}

export const editData = async (req, res) => {
    const data = req.body;
    const editData = new Data(data);

    try {
        await Data.updateOne({ _id: data._id }, editData);
        res.status(201).json(editData);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteData = async (req, res) => {
    try {
        await Data.deleteOne({_id: req.params.id});
        res.status(201);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}