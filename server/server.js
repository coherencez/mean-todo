'use strict'

const express = require('express')
  ,       app = express()
  ,    {json} = require('body-parser')
  ,      PORT = process.env.PORT || 3000
  , {connect} = require('./db/database')
  ,      Todo = require('./db/models/todo')

app.set('port', PORT)

app.use(express.static('client'))
app.use(json())

app.get('/api/todos', (req,res) => {
	Todo
		.find()
		.then(todos => res.json({todos}))
})

connect()
	.then(() => app.listen(PORT, () => console.log(`Now listening on port ${PORT}`)))
	.catch(console.error)

