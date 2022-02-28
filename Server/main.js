const express = require('express')

let cors = require('cors')

let app = express()
app.use(cors())

require('./configs/database')

app.use(express.json())

const studentRouter = require('./routers/studentRouter')

app.use('/api/students', studentRouter)

app.listen(8000)