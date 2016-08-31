var cookingBucket = angular.module('cookingBucket');

cookingBucket.cofig(function ($routeProvide){
    $routeProvider
      .when('/meals', {
          controller: 'mealCtrl',
          templateurl: 'partials/meals.html'
      })
      .when('/dailyCookings',{
          controller: 'dailyCookingCtrl',
          templateUrl: 'partials/dailyCookings.html'
      })
      .when('/mealsoftheday/:dayId',{
          controller: 'dayMealCtrl',
          templateUrl: 'partials/dayMeals.html'
      })
      .otherwise({redirectTo: '/meals'});
});
