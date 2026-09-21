import { createFactory, Factory } from "hono/factory";

const factory = createFactory<{}>();

export const register = factory.createHandlers(
    (c) => {
        return c.json({msg: 'user registered'});
    }
);

export const login = factory.createHandlers(
    (c) => {
        return c.json({msg: 'user logged in!'});
    }
);