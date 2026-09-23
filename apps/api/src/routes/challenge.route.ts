import { Hono } from 'hono';

const router = new Hono();

// get all challenges
router.get('/');

export default router;