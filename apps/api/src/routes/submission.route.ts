import { Hono } from 'hono';
import { getChallengeResult } from '@/controllers/submission.controller';
import { verifyToken } from '@/middlewares/verifyToken';
import { submissionLimiter } from '@/middlewares/submissionLimiter';

const route = new Hono();

route.post('/', verifyToken, submissionLimiter, ...getChallengeResult);

export default route;