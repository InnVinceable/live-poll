module.exports = function(app, data){
    app.get('/question', function(req, res){
        res.send({question: data.question});
    });
    app.post('/question', function(req, res){
        data.question = req.body.question;
        res.sendStatus(200);
    });
    app.put('/question', function(req, res){
        
    });
}