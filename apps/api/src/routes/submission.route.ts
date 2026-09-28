import { Hono } from 'hono';
import { getChallengeResult } from '@/controllers/submission.controller';
import { verifyToken } from '@/middlewares/verifyToken';

const route = new Hono();

route.post('/', verifyToken, ...getChallengeResult);

export default route;