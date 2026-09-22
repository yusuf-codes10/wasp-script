import { sign } from 'hono/jwt';
import type { User } from '@shared/types/user';

const generateToken = (user: User) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is not defined! ');
}