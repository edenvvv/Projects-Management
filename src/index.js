const express = require('express')
const app_port = process.env.PORT|| 3000
const app = express()
const router = express.Router()
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://team15:Ade123321!@cluster0.3jopa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


MongoClient.connect(connectionString, { 
  useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('MedicalDB')
    const usersCollection = db.collection('users')
    app.set('view engine', 'ejs')

    app.use(express.static('public'))

    app.use(bodyParser.urlencoded({ extended: true }))

    router.get('/',function(req,res){
      res.status(200).render('home')
    })

    router.get('/login',function(req,res){
      res.status(200).render('login')
      db.collection('users').find().toArray()
        .then(results => {
          console.log(results)
        })
        .catch(error => console.error(error))
    })

    router.get('/signup',function(req,res){
      res.status(200).render('signup')
    })
    
    router.post('/signup', (req, res) => {
      usersCollection.insertOne(req.body)
        .then(
          res.redirect('/')
        )
        .catch(error => console.error(error))
    })






    app.use('/', router)//add the router
    
    
  })
  .catch(error => console.error(error))

module.exports = app.listen(app_port)
console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)