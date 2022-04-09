import {Router} from 'express'
import {get, post, put, getOne, remove, getGrade} from '../services/grade.service'
import multer from '../config/multer.config'

const router = Router();
    router.get('/', get);
    router.get('/:id', getOne);
    router.post('/', multer.single('image'), post);
    router.put('/:id', put);
    router.delete('/:id', remove);

export default router;