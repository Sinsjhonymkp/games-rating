const fs = require("fs").promises;
const { config } = require("../appModules/raiting")
const { getRandomGame } = require("../appModules/api")
async function gameRouteController(res) {
    try {
        const raitingFile = await fs.readFile(config.PATH_TO_RAITING_FILE);
        const data = JSON.parse(raitingFile);
        const game = getRandomGame(data);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(game));
    } catch (error) {
        res.statusCode = 500;
        res.end("Internal Server Error");
    }
}

module.exports = gameRouteController; 