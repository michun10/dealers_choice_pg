const playerInfo = (player) => {
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
  <div class="player-details">
  Player Name: ${player.name}
  <br>Player Position: ${player.position}
  <br>Team: ${player.team}
  <br>Caps: ${player.caps}
  </div>
  <button id="home">Home</button>
  <script>
        const button = document.querySelector("button");
        const goHome = () => {
            window.location = "/";
        };
        button.addEventListener("click", goHome);
  </script>
  </body>
  </html>
  `;
  return html;
};

module.exports = playerInfo;
