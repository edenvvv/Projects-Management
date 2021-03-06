const express = require('express')
const app_port = process.env.PORT || 3000
const app = express()
const path = require('path')
const router = express.Router()

app.use(express.static('public'))

app.set('view engine', 'ejs')

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../public/html/home.ejs'))
  res.render('../public/html/home')

})

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname, '../public/html/login.ejs'))
})

app.use('/css',express.static(__dirname +'/css'))

//add the router
app.use('/', router)
app.listen(app_port)

console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)