var app = angular.module('cookingBucket',['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
      .when('/', {
          controller: 'MealsCtrl',
          templateUrl: 'partials/meals.html'
      })
      .when('/meals', {
          controller: 'MealsCtrl',
          templateUrl: 'partials/meals.html'
      })
      .when('/dailyCookings',{
          controller: 'DailyCookingCtrl',
          templateUrl: 'partials/dailyCookings.html'
      })
      .when('/mealsoftheday/:dayId',{
          controller: 'DayMealCtrl',
          templateUrl: 'partials/dayMeals.html'
      })
      .otherwise({ redirectTo: '/meals' });
});


app.run([
  '$rootScope',
  function($rootScope) {
    // see what's going on when the route tries to change
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // next is an object that is the route that we are starting to go to
      // current is an object that is the route where we are currently
      var currentPath = current.originalPath;
      var nextPath = next.originalPath;

      console.log('Starting to leave %s to go to %s', currentPath, nextPath);
    });
  }
]);