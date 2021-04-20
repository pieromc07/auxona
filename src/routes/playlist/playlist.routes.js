import { Router } from 'express'
import { findById } from '../../controllers/PlaylistController'

const router = Router()


router.get("/:id", findById)

export default router