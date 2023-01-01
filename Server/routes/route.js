import express from "express";
import {addData, getAllData, getSingle, editData, deleteData} from "../controller/data-controller.js";

const router = express.Router();

router.post('/add', addData);
router.get('/', getAllData);
router.get('/:id', getSingle);
router.put('/:id', editData);
router.delete('/:id', deleteData);

export default router;