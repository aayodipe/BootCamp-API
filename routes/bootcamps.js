import express from 'express';
import { get } from 'http';
import {getBootCamps, getBootCamp,createBootCamp, updateBootCamp, deleteBootCamp } from '../controller/bootcamps.js'
const router = express.Router()
 
router.route('/')
.get(getBootCamps)
.post(createBootCamp)

router.route('/:id')
.get(getBootCamp)
.put(updateBootCamp)
.delete(deleteBootCamp)


export default router