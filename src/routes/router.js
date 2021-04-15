import { Router } from 'express';

import searchRouter from './search/search.routes'   
import playRouter from './play/play.routes'

const router = Router()

router.use(searchRouter)
router.use(playRouter)

export default router