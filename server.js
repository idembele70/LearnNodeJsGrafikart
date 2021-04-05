//require
const http = require('http');
const EvenEmiter = require('events');

// listener

const App = {
    start: function (port) {
        const emitter = new EvenEmiter();
        http.createServer((requete, reponse) => {
            reponse.writeHead(200, {
                'content-type': 'text/html; charset=utf-8'
            });
            if (requete.url === '/') {
                emitter.emit('root', reponse);
            }
            reponse.end();
        }).listen(port);
        return emitter;
    }
}
const app = App.start(8080);
app.on('root', (response) => {
    response.write('Vous étes à la racine');
})