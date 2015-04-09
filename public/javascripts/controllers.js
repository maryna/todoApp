/**
 * Created by maryna on 29/03/15.
 */
'use strict';

/* Controllers */

angular.module('todoAppControllers', [])

    .controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
        $scope.todos = Todos.query();

        $scope.saveTodo = function() {
            if ($scope.todoText.length>0) {
                var todo = new Todos({ note: $scope.todoText, completed: false });

                todo.$save(function () {
                    $scope.todos.push(todo);
                    $scope.todoText = '';
                });
            }
        };

        $scope.updateTodo = function(index){
            var todo = $scope.todos[index];
            Todos.update({id: todo._id}, todo);
        };

        $scope.removeTodo = function(index){
            var todo = $scope.todos[index];
            Todos.remove({id: todo._id}, function(){
                $scope.todos.splice(index, 1);
            });
        }

    }]);

