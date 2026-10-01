import { Hono } from 'hono';
import { getAllChallenges, getChallengeById } from '@/controllers/challenge.controller';
import { verifyToken } from '@/middlewares/verifyToken';

const router = new Hono();

router.use(verifyToken);

// get all challenges
router.get('/',  ...getAllChallenges);

// get challenge by id
router.get('/:id', ...getChallengeById);

export default router;