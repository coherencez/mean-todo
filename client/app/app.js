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
	$http
		.get('/api/todos')
		.then(({data: {todos}}) => $scope.todos = todos)
		.catch(console.error )
}])