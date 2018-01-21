var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('animal', function(obj) {
        console.log('Animal recu : ', obj);
        socket.broadcast.emit('animal majordome', obj);
    });
    socket.on('gardiennage', function(obj) {
        console.log('Gardiennage recu : ', obj);
        socket.broadcast.emit('gardiennage majordome', obj);
    });
    socket.on('marchandise', function(obj) {
        console.log('marchandise recu recu : ', obj);
        socket.broadcast.emit('marchandise majordome', obj);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});