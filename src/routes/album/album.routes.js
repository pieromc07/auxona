import { Router } from 'express'
import { findById } from '../../controllers/AlbumController'

const router = Router()


router.get("/:id", findById)

export default router