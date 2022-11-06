const playerList = (players) => {
  const renderPlayers = () => {
    return players
      .map((player) => {
        return `<li><a href = "./${player.id}">${player.position} - ${player.name}</a></li>`;
      })
      .join(" ");
  };

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <title> Players </title>
  <link rel="stylesheet", href = "./public/style.css">
  </head>
  <header>
  <img src="./public/logo.png">
  <h1> New Zealand Black Ferns </h1>
  </header>
  <body>
  <div class = "player-details">
  <ul>
  ${renderPlayers()}
  </ul>
  </div>
  </body>
  </html>
  `;
  return html;
};

module.exports = playerList;
