var mongoose = require('mongoose')


const dbURI ='mongodb://127.0.0.1:27017/tienda';
mongoose.connect(dbURI, {useMongoClient: true});

mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to' + dbURI);
});

mongoose.connection.on('error',function(err) {
    console.log('Mongoose default connection error: ' + err);
});


mongoose.connection.on('disconnected', function(){
    console.log('Mongoose default connection disconnected ');
});


process.on('SIGINT', function() {
    mongoose.connection.close(function (){
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

const express = require ('express');
const path = require ('path');
const http = require ('http');
const bodyParser = require ('body-parser');
const port = 3001;


const app = express();


app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/api', (req, res) => {
    res.send('La Api funciona');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})



app.set ('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('API running on localhost:${port}'));


