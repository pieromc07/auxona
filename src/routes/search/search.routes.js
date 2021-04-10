import { Router } from 'express';
import { findAll, findByAlbum, findByArtist, findByPlaylist, findByTrack } from '../../controllers/SearchController';


const router = Router()


router.get('/search', findAll)

router.get('/search/album', findByAlbum)

router.get('/search/artist', findByArtist)

router.get('/search/playlist', findByPlaylist)

router.get('/search/track', findByTrack)

export default router