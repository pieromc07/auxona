import { Router } from 'express';

import searchRouter from './search/search.routes'   

const router = Router()

router.use(searchRouter)


export default router