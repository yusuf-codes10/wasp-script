import { jwt } from 'hono/jwt';

// reusable template
const secret = process.env.JWT_SECRET;
if (!secret) throw new Error('JWT_SECRET is not defined!');

export const verifyToken = jwt({
  secret,
  alg: 'HS256',
  cookie: 'auth', // no defaults, check my named cookie is is auth
});