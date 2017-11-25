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
    activeClients.forEach(function (value) {
        console.log("The id of this client is " + value.id);
    });

    client.on('chat', function (message) {
        console.log("chat message received" + message);
        allClientsExcept(client)(otherClient => {
            otherClient.emit('chat', message);
        })
    });

    client.on('data', function (data) {
        allClientsExcept(client)(otherClient => {
            otherClient.emi('data', data);
        });
    });
}

module.exports = handleIo;