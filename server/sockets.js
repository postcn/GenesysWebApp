let activeClients = [];

function allClientsExcept(client) {
    let invoker = function (callee) {
        activeClients.filter(activeClient => {
            return activeClient.id !== client.id;
        }).forEach(callee);
    }
    return invoker;
}

function handleIo(client) {
    activeClients.push(client);

    client.on('chat', function (message, ack) {
        console.log("chat message received" + message);
        allClientsExcept(client)(otherClient => {
            otherClient.emit('chat', message);
        });
        ack('submitted');
    });

    client.on('data', function (data, ack) {
        allClientsExcept(client)(otherClient => {
            otherClient.emi('data', data);
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