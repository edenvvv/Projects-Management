const express  = require('express')
const app_port = process.env.PORT || 3000
const app = express()

app.get('/', function(req,res){
    res.sendFile(__dirname + '\\home.html');
}); 

app.get('/login', function(req,res){
    res.sendFile(__dirname + '\\login.html');
}); 

app.listen(app_port)
console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)
