const express = require('express')
const app_port = process.env.PORT|| 3000
const app = express()
const router = express.Router()
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://team15:Ade123321!@cluster0.3jopa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const accessTokenSecret = '6f6794a83fc9f561f1089dc70217f1946e76f7a892d45dedff1c7a3d3b2dacd5c869d30b295716c552a20442a3cf229c2446d6cbf9075ab229e05e9d7377cb3b'

const alert = require('alert')

MongoClient.connect(connectionString, { 
  useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('MedicalDB')
    const usersCollection = db.collection('users')
    app.set('view engine', 'ejs')

    app.use(express.static('public'))
  
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.use(cookieParser())
    
      

    router.get('/', function(req,res){
      res.status(200).render('home')
    })

    router.get('/login',function(req,res){
      res.status(200).render('login')
    })

    router.post('/login', (req, res) => {
        usersCollection.findOne({ email: req.body.email}, function(err, user) {
          if(user) {
            if (user.password === req.body.pass){
              console.log('User and password is correct')
              const accessToken = jwt.sign({ email: user.email,  role: user.role }, accessTokenSecret)
              res.cookie('authcookie', accessToken ,{maxAge:900000, httpOnly:true})
              return res.redirect('/')
            }
          }
          if(err) {
            console.log('THIS IS ERROR RESPONSE')
            return res.json(err)
          }
          if(req.body.email !== undefined && req.body.pass !== undefined){
            alert('invalid username or password, please try again')
            console.log('Credentials wrong')
            res.redirect('/login')
          }
        })  
    })


    router.get('/signup',function(req,res){
      res.status(200).render('signup')
    })
    
    router.post('/signup', (req, res) => {
      req.body.role = 'simple_user'
      usersCollection.insertOne(req.body)
        .then(
          res.redirect('/')
        )
        .catch(error => console.error(error))
    })

    router.get('/test', checkToken, function(req,res){
      const { role } = req.user
      //console.log(req.user)
  
      if (role !== 'admin') {
          return res.sendStatus(403)
      }
      res.status(200).render('test')
    })

    router.get('/logout', function(req,res){
      res.clearCookie('authcookie')
      res.redirect('/')
    })


    app.use('/', router)//add the router
    
    
  })
  .catch(error => console.error(error))


  function checkToken(req, res, next) {
    //console.log(req.cookies.authcookie)
    const authcookie = req.cookies.authcookie
    jwt.verify(authcookie,accessTokenSecret,(err,data)=>{
      if(err){
        res.sendStatus(403)
      } 
      else if(data){
        req.user = data
        next()
      }
    }    
  )}

module.exports = app.listen(app_port)
console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)