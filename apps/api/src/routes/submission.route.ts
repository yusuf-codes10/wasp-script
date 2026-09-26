import { Hono } from 'hono';
import { getChallengeResult } from '@/controllers/submission.controller';

const route = new Hono();

route.post('/', ...getChallengeResult);

export default route;