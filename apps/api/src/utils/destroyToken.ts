import type { Context } from "hono"
import { deleteCookie } from "hono/cookie"

export const destroyToken = (c: Context): void => {
    deleteCookie(c, 'auth', {
        httpOnly: true,
        secure: true,
        sameSite: "Strict"
    })
}