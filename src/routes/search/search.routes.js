import { Router } from 'express';
import { findAll, findByAlbum, findByArtist, findByPlaylist, findByTrack } from '../../controllers/SearchController';


const router = Router()


router.get('/', findAll)

router.get('/album', findByAlbum)

router.get('/artist', findByArtist)

router.get('/playlist', findByPlaylist)

router.get('/track', findByTrack)

export default router