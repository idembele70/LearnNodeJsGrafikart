// requires
const EvenEmitter = require('events');

// listenner
const App = {
    start : function(){
    const listener = new EvenEmitter()    
    }
}

const app = App.start();

app.on('root', function (response){
    response.write('Je suis à la racine')
})

const monEcouteur = new EvenEmitter();

monEcouteur.once('saute', function(a, b){
    console.log("j'ai sauté " , a, b);
});

monEcouteur.emit('saute',10,20);
monEcouteur.emit('saute',20,30);
monEcouteur.emit('saute',40,50);