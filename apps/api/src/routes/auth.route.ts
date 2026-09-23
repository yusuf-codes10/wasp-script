import { Hono } from 'hono';
import { register, login, logout, verifyUser  } from '@/controllers/auth.controller';
import { verifyToken } from '@/middlewares/verifyToken';

const router = new Hono();

// register
router.post('/register', ...register);

// login
router.post('/login', ...login);

// logout
router.post('/logout', verifyToken, ...logout);

// /me
router.get('/me', verifyToken, ...verifyUser);

export default router;