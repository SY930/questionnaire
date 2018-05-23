
let express = require('express');
let app = express();

app.listen(3000);
let bodyParser = require('body-parser');
app.use(bodyParser.json());
let data = require('./data.json');
let data_question = require('./question.json');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*?options??????*/
    else  next();
});
app.post('/getManageById',function (req,res) {
    let data_body = req.body;
    res.json(data)
});
app.post('/getQuestionTopic',function (req,res) {
    let data_dody = req.body;
    res.json(data_question)
});