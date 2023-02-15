const express= require('express')
const path = require('path')
const route = express.Router();
const app=express();
const index=require('./routes/index')
const login=require('./routes/login')
const register=require('./routes/register')
const payload=require('./routes/payload')
const orders=require('./routes/orders')
const products=require('./routes/products')
const report=require('./routes/report')
const cors = require('cors');
require("./data/driver_data")
const bodyParser=require("body-parser")
route.use(bodyParser.json())
app.set('port',process.env.PORT||3001)

app.use(cors())

app.use(express.static(path.join(__dirname,'imgs')))
app.use('/',index)
app.use('/login',login)
app.use('/registrer',register)
app.use('/payload',payload)
app.use('/orders',orders)
app.use('/product',products)
app.use('/report',report)

app.listen(app.get('port'),()=>{

    console.log(`Server listen to port ${app.get('port')}`)
})

