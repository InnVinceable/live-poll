module.exports = function(app, data){
    app.get('/answer', function(req, res){
        res.send(data.answers);
    });
    app.post('/answer', function(req, res){
        data.answers.push(req.body.answer);
        res.send(200);
    });
    app.put('/answer', function(req, res){
        res.render('login', {
            title: 'Express Login'
        });
    });
}