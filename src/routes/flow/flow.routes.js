import { Router } from 'express'
import { flowUser, flow } from '../../controllers/flowController'


const router = Router()

router.get('/:user', flowUser)
router.get('/', flow)

export default router