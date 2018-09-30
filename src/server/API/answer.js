var ready = false;
const onReady = () => { ready = true };
const mqttClient = require('./../Integrations/aws/mqtt-publisher')();
module.exports = function(app, data){
    app.get('/answer', function(req, res){
        res.send(data.answers);
    });
    app.post('/answer', function(req, res){
        var ipadd = req.connection.remoteAddress;
        console.log(ready);
        if (ready)
            mqttClient.publish('live-poll-answer', JSON.stringify({ answer: 'YES', ip: ipadd }))
        data.answers.push(req.body.answer);
        res.send(200);
    });
    app.put('/answer', function(req, res){
        res.render('login', {
            title: 'Express Login'
        });
    });
}