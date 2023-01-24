const express = require('express');
const app = express();
const path = require('path');


const PORT = 5000;


    

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


const staticPath = (path.join(__dirname,'../public'));






app.use(express.static(staticPath));

app.get('/', (req,res) => {
    res.sendFile('index.html');

})
app.post('/submit-data',(req,res)=> {
    var name = req.body.email+" "+req.body.password+" "+req.body.address+" "+req.body.city+" "+req.body.state;

    res.send(name+"Submited successfull");

})

app.listen(PORT,() => {
    console.log('Running on the port:');
})
