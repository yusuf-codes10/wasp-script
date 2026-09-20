import { Hono } from "hono";

const app = new Hono();

app.get('/', (c) => {
    return c.json({msg: 'Hey man'});
})

app.get('/admin', (c) => {
    return c.json({msg: 'Hello Admin!'});
})

export default app;
