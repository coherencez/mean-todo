'use strict'

const app = angular.module('meanTodo', ['ngRoute'])

app.config($routeProvider => {
	$routeProvider
		.when('/', {
			controller: 'MeanCtrl',
			templateUrl: 'partials/main.html'
		})
		.when('/todos', {
			controller: 'TodoCtrl',
			templateUrl: 'partials/todo.html'
		})
})

app.controller('MeanCtrl', ['$scope', function($scope) {
	$scope.title = 'Hello from angular!'
}])

app.controller('TodoCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.title = 'TODO List'
	$scope.edit = false

	$scope.addTodo = () => {
		const todoObj = {
			content: $scope.content
		}
		$http
		.post('/api/todos', todoObj)
		.then(() => {
			$scope.todos.push(todoObj)
			$scope.content = ''
		})
		.catch(console.error)
	}

	$scope.deleteTodo = (todoId, index) => {
		$http
		.post('/api/delete', {todoId})
		.then(() => $scope.todos.splice(index,1))
		.catch(console.error)
	}

	$scope.editTodo = (e, id, content, index) => {
		const todoTag = e.target
		const  $input = $(`<input value=${content} />`)
		$(todoTag).append($input).on('keyup', (e) => {
			if(e.keyCode === 13) {
				console.log($scope.content)
				$http
				.post('/api/edit', {})
				.then(() => console.log('done posting'))
				.catch(console.error)
				$(todoTag).children("input:first").remove()
			}
		})
		
	}

	$scope.saveEdit = (e) => {

	}

	$http
		.get('/api/todos')
		.then(({data: {todos}}) => $scope.todos = todos)
		.catch(console.error )
}])