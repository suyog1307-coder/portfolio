import { Router } from 'express'
import { projectController } from '../controllers/projectController'
import { requireAdmin } from '../middleware/auth'

// <-- Added explicit ': Router' type here
const router: Router = Router()

// Public
router.get('/', projectController.getAll)
router.get('/:id', projectController.getOne)

// Protected
router.post('/', requireAdmin, projectController.create)
router.put('/:id', requireAdmin, projectController.update)
router.delete('/:id', requireAdmin, projectController.remove)

export default router