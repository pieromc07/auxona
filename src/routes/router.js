import { Router } from 'express';

import searchRouter from './search/search.routes'   
import playRouter from './play/play.routes'
import albumRouter from './album/album.routes'
import playlistRouter from './playlist/playlist.routes'
import flowRouter from './flow/flow.routes' 

const router = Router()

router.use('/search',searchRouter)
router.use('/play', playRouter)
router.use('/album',albumRouter)
router.use('/playlist',playlistRouter)
router.use('/flow', flowRouter)
export default router