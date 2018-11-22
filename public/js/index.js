let socket = io();

socket.on('connect', function() {
    console.log('Connect to server');

    socket.emit('createMessage', {
        from: "Jen@example.com",
        text: "Tudo bem??"
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
});