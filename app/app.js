var app = angular.module('cookingBucket',['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
      .when('/meals', {
          controller: 'MealsCtrl',
          templateUrl: 'partials/meals.html'
      })
      .when('/dailycookings',{
          controller: 'MealsCtrl',
          templateUrl: 'partials/dailyCookings.html'
      })
      .when('/mealsoftheday/:day',{
          controller: 'DayMealsCtrl',
          templateUrl: 'partials/dayMeals.html'
      })
      .otherwise({ redirectTo: '/meals' });
});