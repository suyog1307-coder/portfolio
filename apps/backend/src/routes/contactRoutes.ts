import { Router } from 'express'
import { contactController } from '../controllers/contactController'
import { requireAdmin } from '../middleware/auth'

const router = Router()

// Public — submit a message
router.post('/', contactController.create)

// Protected — read and delete messages
router.get('/', requireAdmin, contactController.getAll)
router.delete('/:id', requireAdmin, contactController.remove)

export default router
