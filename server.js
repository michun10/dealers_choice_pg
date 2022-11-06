const express = require("express");
const morgan = require("morgan");
const client = require("./db");
const playerList = require("./playerList");
const playerInfo = require("./playerInfo");

const app = express();
const PORT = 1337;
app.use(express.static(__dirname, +"/public"));

app.get("/", async (req, res, next) => {
  try {
    const query = `
    SELECT * FROM players; 
    `;
    const data = await client.query(query);
    const players = data.rows;
    res.send(playerList(players));
  } catch (error) {
    next(error);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const query = `
    SELECT * FROM players 
    WHERE id = $1
    `;
    const data = await client.query(query, [id]);
    const player = data.rows[0];
    res.send(playerInfo(player));
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
