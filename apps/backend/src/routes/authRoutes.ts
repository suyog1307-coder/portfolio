import { Router } from 'express';
import { login } from '../controllers/authController';

// <-- Added explicit ': Router' type here
const router: Router = Router(); 

// POST /api/auth/login
router.post('/login', login);

export default router;