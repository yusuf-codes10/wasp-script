import { Hono } from 'hono';
import { register, login, logout, verifyUser  } from '@/controllers/auth.controller';
import { verifyToken } from '@/middlewares/verifyToken';
import { authLimiter } from '@/middlewares/authLimiter';

const router = new Hono();

// register
router.post('/register', authLimiter, ...register);

// login
router.post('/login', authLimiter, ...login);

// logout
router.post('/logout', verifyToken, ...logout);

// /me
router.get('/me', verifyToken, ...verifyUser);

export default router;