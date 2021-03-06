var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: '24f5b8e9-1677-4206-9252-c5b81be82dac',
    appPassword: 'Uqf3Jat7NpnydWFNibiXiMd'
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    if(session.message.text === 'hello world'){
    session.send("You said: %s", session.message.text);
    }else {
        session.send("no match found");
    }
});