module.exports = function(app, data){
    app.get('/answer', function(req, res){
        res.send(data.answers);
    });
    app.post('/answer', function(req, res){
        //var ipadd = req.connection.remoteAddress;
        //mqttClient.publish('live-poll-answer', { answer: req.body.answer, ip: ipadd })
        data.answers.push(req.body.answer);
        res.send(200);
    });
    app.put('/answer', function(req, res){
        res.render('login', {
            title: 'Express Login'
        });
    });
}