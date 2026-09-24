import { Hono } from 'hono';
import { getAllChallenges, getChallengeById } from '@/controllers/challenge.controller';

const router = new Hono();

// get all challenges
router.get('/', ...getAllChallenges);

// get challenge by id
router.get('/:id', ...getChallengeById);

export default router;