import { Hono } from 'hono';
import { getAllChallenges } from '@/controllers/challenge.controller';

const router = new Hono();

// get all challenges
router.get('/', ...getAllChallenges);

export default router;