import type { Context } from "hono"
import { deleteCookie } from "hono/cookie"

export const destroyToken = (c: Context): void => {
    deleteCookie(c, 'auth', {
        httpOnly: true, // pervent XSS attacks (Javascript cannot access it)
        secure: true, // only HTTPS, never plain HTTP
        sameSite: "Strict", // protecting against CSRF attacks
    })
}