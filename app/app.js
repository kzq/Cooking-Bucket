var app = angular.module('cookingBucket',['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
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