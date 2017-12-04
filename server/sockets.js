let activeClients = [];

function handleIo(client) {
    activeClients.push(client);

    client.on('chat', function (message, ack) {
        console.log("chat message received" + message);
        activeClients.forEach(client => {
            client.emit('chat', message);
        });
        ack('submitted');
    });

    client.on('data', function (data, ack) {
        activeClients.forEach(client => {
            client.emit('data', data);
        });
        ack('submitted');
    });

    client.on('disconnect', function (data) {
        console.log("disconnecting client " + client.id);
        activeClients = activeClients.filter(testClient => {
            return testClient.id !== client.id;
        });
        console.log("after disconnecting, the client list length is " + activeClients.length);
    });
}

module.exports = handleIo;