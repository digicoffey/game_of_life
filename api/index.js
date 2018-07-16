import express from 'express';
import getRoomContent from './controllers/room';

const router = express.Router()

router.get('/room/:x/:y', getRoomContent);

export default router;
