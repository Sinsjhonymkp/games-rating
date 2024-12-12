const staticFile = require('../appModules/http-utilts/static-file')
const { getData, endPoints } = require('../appModules/api');
const { config, makeRatingFile } = require("../appModules/raiting")

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endPoints.games);


    await makeRatingFile(config.PATH_TO_RAITING_FILE, data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController; 