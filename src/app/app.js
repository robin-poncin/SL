
angular.module('sl', [
  'ngRoute',
  'sl.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .otherwise({
      redirectTo: '/'
    });
});
