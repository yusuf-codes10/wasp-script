import type { Context } from "hono"
import type { User } from '@shared/types/user';
import { generateToken } from "./generateToken";
import { setCookieToken } from "./setCookieToken";

export const issueSession = async (c: Context, user: Pick<User, 'id' | 'username' |'email'>): Promise<void> => {
    const token = await generateToken(user);
    setCookieToken(c, token);
}