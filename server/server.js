'use strict'

const express = require('express')
  ,       app = express()
  ,      PORT = process.env.PORT || 3000

app.set('port', PORT)

app.use(express.static('client'))

app.get('/api/todos', (req,res) => {
	res.send({
		todos: [
			{content: 'Go shopping with express'},
			{content: 'Do chores with node'},
		]
	})
})

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
