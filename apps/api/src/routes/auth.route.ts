import { Hono } from 'hono';
import { register, login, logout } from '@/controllers/auth.controller';

const router = new Hono();

// register
router.post('/register', ...register);

// login
router.post('/login', ...login);

// logout
router.post('/logout', ...logout);

// /me
router.get('/me');

export default router;