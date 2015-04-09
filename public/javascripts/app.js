/**
 * Created by maryna on 29/03/15.
 */
'use strict';

/* App Module */

angular.module('app', [
    'ngRoute',
    'ngResource',
    'todoAppControllers',
    'todoAppDirectives',
    'todoAppServices'
])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'partials/todos.html',
                    controller: 'TodoController'
                })

        }]);