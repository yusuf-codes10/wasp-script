import { Hono } from 'hono';

const route = new Hono();

route.post('/');

export default route;