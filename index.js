var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/sample.html');
});

io.on('connection', function (socket) {
  var roomId = socket.handshake.query.roomId;
  var clientId = socket.id;
  var remoteAddress = socket.conn.remoteAddress;
  socket.join(roomId);
  console.log({
    eventName: "connect",
    datetime: new Date().toISOString(),
    remoteAddress: remoteAddress,
    roomId: roomId,
  });
socket.on('do event', function (msg) {
    console.log({
      eventName: "do event",
      datetime: new Date().toISOString(),
      remoteAddress: remoteAddress,
      roomId: roomId,
      body: msg
    });
    io.to(roomId).emit('do event', msg);
  });
  socket.on('undo event', function (msg) {
    console.log({
      eventName: "undo event",
      datetime: new Date().toISOString(),
      remoteAddress: remoteAddress,
      clientId: clientId,
      roomId: roomId,
      body: msg
    });
    io.to(roomId).emit('undo event', msg);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});