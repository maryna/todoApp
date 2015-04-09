/**
 * Created by maryna on 30/03/15.
 */
'use strict';

/* Directives */

angular.module('todoAppDirectives', [])

    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })

    .directive('editInPlace', function($timeout) {
        return {
            restrict: 'E',
            scope: { value: '=' },
            template: '<span ng-click="edit()" ng-bind="value">' +
                '</span>' +
                '<input type="text" class="form-control" ng-model="value" autofocus/>',
            link: function (scope, element, attrs) {
                var inputElement = angular.element(element.children()[1]);
                element.addClass('edit-in-place');

                scope.edit = function () {
                    element.addClass('active');
                    $timeout(function() {
                        inputElement[0].focus();
                    });
                };

                inputElement.on("keydown keypress", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attrs.ngEnter);
                            element.removeClass('active');
                        });
                        event.preventDefault();
                    }
                });

                inputElement.on("blur", function () {
                    element.removeClass('active');
                });


            }
        };
    });
