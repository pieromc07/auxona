import { Router } from 'express';
import { play } from '../../controllers/PlayController';

const router = Router()

router.get('/', play)

export default router