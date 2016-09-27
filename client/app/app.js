'use strict'

const app = angular.module('meanTodo', [])

app.controller('MeanCtrl', ['$scope', function($scope) {
	$scope.title = 'Hello from angular!'
}])