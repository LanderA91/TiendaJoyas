const { Pool } = require ('pg');
const format = require ('pg-format');

export const pool = new Pool({
	user:"postgres",
	host: "localhost",
	password: "12345",
	database: "joyas",
	port: 5500,
	allowExitOnIdle: true,
});