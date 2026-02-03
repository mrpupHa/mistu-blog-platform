import * as pg from "pg";
const { Pool } = pg.default;
const dbPassword = process.env.DB_PASSWORD;

export default connectionPool;
