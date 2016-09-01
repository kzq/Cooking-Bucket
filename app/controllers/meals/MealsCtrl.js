app.controller('MealsCtrl',function($scope,mealsService){
    
    $scope.mealTypes=['Breakfast','Lunch','Dimmer'];
    $scope.days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
   
    init();
    
    function init(){
        $scope.meals = mealsService.getMeals();
    };
   
    //$scope.addMeal();
    //$scope.getMeal();
    
});
