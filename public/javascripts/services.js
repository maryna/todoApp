/**
 * Created by maryna on 29/03/15.
 */

'use strict';

/* Services */

angular.module('todoAppServices', ['ngResource'])

    .factory('Todos', ['$resource',
        function($resource){
            return $resource('/todos/:id', null, {
                'update': { method:'PUT' }
            });
        }]);