const express = require('express')
const app_port = process.env.PORT || 3000
const app = express()
const router = express.Router()


app.set('view engine', 'ejs')

app.use(express.static('public'))



router.get('/',function(req,res){
  res.render('home')
})

router.get('/login',function(req,res){
  res.render('login')
})

app.use('/css',express.static(__dirname +'/css'))

//add the router
app.use('/', router)
app.listen(app_port)

console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)