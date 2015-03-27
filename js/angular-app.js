angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/about");

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })
    .state('publications', {
      url: 'publications',
      templateUrl: 'templates/publications.html'
    });
})
;
