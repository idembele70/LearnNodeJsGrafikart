// Require
const http = require('http');
const eventEmitter = require('events');
// listenter

// function

const App = {
    start: (port) => {
        const emitter = new eventEmitter()
        http.createServer((request, response) => {
            response.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            if (request.url === "/") {
                emitter.emit('racine', response)
            }
            response.end()
        }).listen(port)
        return emitter;
    }
};

const app = App.start(8080);
app.on("racine", (res) => {
    res.write("Je suis à la racine");
})