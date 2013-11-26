var server = require("./async-server");
var router = require("./router");


server.start(router.route);