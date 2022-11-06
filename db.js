const pg = require("pg");

const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/ferns"
);

client.connect();

module.exports = client;
