
const defaultRouteController = require('./controllers/deafult');
const mainRouteController = require('./controllers/main')
const gameRouteController = require('./controllers/game')
const voteRouteController = require('./controllers/vote')

http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            res.statusCode = 200;
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        case "/vote":
            voteRouteController(req, res);
            break;
        default:
            defaultRouteController(res, url);
            break;
    }
});

server.listen(3005);