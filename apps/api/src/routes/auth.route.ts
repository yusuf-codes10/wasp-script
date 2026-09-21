import { Hono } from 'hono';
import { register, login } from '@/controllers/auth.controller';

const router = new Hono();

// register
router.post('/register', ...register);

// login
router.post('/login', ...login);

export default router;