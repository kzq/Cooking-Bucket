app.controller('MealsCtrl',function($scope,mealsService){
    
    $scope.mealTypes=['Breakfast','Lunch','Dimmer'];
    $scope.days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
   
    init();
    
    function init(){
        $scope.meals = mealsService.getMeals();
        $scope.totalMeals = $scope.meals.length;
    };
   
    $scope.addMeal = function(){
       mealsService.insertMeal($scope.newMeal.name,$scope.newMeal.type,$scope.newMeal.day);
       $scope.newMeal.name='',$scope.newMeal.type='',$scope.newMeal.day=''; 
    };
    
    $scope.getDayMeal = function(day){
    	$scope.meals = mealsService.getDayMeals(day);
        $scope.totalMeals = $scope.meals.length;
    };
    
});
