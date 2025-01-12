const app = require("./server");
const { port, secret } = require("./config");

const server = app.listen(port, function () {
	console.log("Webserver is ready on port %s, secret: %s", port, secret);
});

// quit on ctrl-c when running docker in terminal
process.on("SIGINT", function onSigint() {
	console.info("Got SIGINT (aka ctrl-c in docker). Graceful shutdown ", new Date().toISOString());
	shutdown();
});

// quit properly on docker stop
process.on("SIGTERM", function onSigterm() {
	console.info("Got SIGTERM (docker container stop). Graceful shutdown ", new Date().toISOString());
	shutdown();
});

// shut down server
function shutdown() {
	server.close(function onServerClosed(err) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		process.exit(0);
	});
}
// need above in docker container to properly exit