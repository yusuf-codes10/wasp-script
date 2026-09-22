import type { Context } from "hono"
import type { User } from '@shared/types/user';
import { generateToken } from "./generateToken";
import { setCookieToken } from "./setCookieToken";

export const issueSession = () => {

}