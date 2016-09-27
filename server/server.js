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

app.get('/api/todos', (req,res,err) => {
	Todo
	.find()
	.then(todos => res.json({todos}))
	.catch(err)
})

app.post('/api/todos', (req,res,err) => {
	Todo
	.create(req.body)
	.then(todo => res.json({todo}))
	.catch(err)
})

app.post('/api/delete', ({body: {todoId}},res,err) => {
	Todo
	.remove({_id: todoId})
	.then((data) => res.json({data}))
	.catch(err)
})

app.post('/api/edit', (req,res) => {
	console.log('REQ', req.body)
})

connect()
	.then(() => app.listen(PORT, () => console.log(`Now listening on port ${PORT}`)))
	.catch(console.error)

