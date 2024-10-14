import express from 'express'
import {getMovies,deleteMovies,postMovies,putMovies} from '../controllers/movies.controller.js'
const router= express.Router();

router.get('/',getMovies)

router.delete('/id',deleteMovies)


router.post('/',postMovies)

router.put('/id',putMovies)

export default router;