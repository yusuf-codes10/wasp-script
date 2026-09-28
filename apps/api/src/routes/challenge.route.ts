import { Hono } from 'hono';
import { getAllChallenges, getChallengeById } from '@/controllers/challenge.controller';
import { verifyToken } from '@/middlewares/verifyToken';

const router = new Hono();

// get all challenges
router.get('/', verifyToken,  ...getAllChallenges);

// get challenge by id
router.get('/:id', verifyToken, ...getChallengeById);

export default router;