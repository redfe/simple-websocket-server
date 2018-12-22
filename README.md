# Simple Websocket Server

very simple WebSocket server by [Socket.IO](https://socket.io/).

## Feature

- share event message.
  - event name is `do event`, `undo event`.
- room.
  - specify `roomId` parameter.

## Usage

install libraries.

```
$ npm install
```

start server.

```
$ node index.js
```

client html.

```
    <script src="http://localhost:3000/socket.io/socket.io.js"></script>
    ...
    var socket = io('http://localhost:3000/?roomId=sampleroom');

    
    socket.on('do event', function (event) {
        console.log(event);
    });

    socket.on('undo event', function (event) {
        console.log(event);
    });

    socket.emit('do event', {name: "Hello"});
    socket.emit('undo event', {name: "Hello"});
```
