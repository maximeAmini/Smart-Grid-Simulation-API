//imports
var app = require('express')()
var cors = require('cors')
var bodyParser = require('body-parser')
var apiRouter = require('./apiRouter').router

//configuration
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//routes
app.get('/',(req,res)=>{
    console.log('salut')
})

app.use('/',apiRouter)

//démmarage
app.listen(4000, ()=>{
    console.log('Running on port 4000')  
})