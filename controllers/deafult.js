const path = require("path");
const staticFile = require("../appModules/http-utilts/static-file");
const mimeTypes = require("../appModules/http-utilts/mime-types");

async function defaultRouteController(res, url) {
    const extname = String(path.extname(url)).toLowerCase();
    if (extname in mimeTypes) {
        staticFile(res, url, extname);
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}

module.exports = defaultRouteController; 