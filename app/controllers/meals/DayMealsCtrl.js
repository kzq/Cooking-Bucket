app.controller('DayMealsCtrl',function($scope,$routeParams,mealsService){
    
    init();
    
    function init(){
        $scope.day = ($routeParams.day) ? $routeParams.day : 'Monday';
        $scope.meals = mealsService.getDayMeals($scope.day);
        $scope.totalMeals = $scope.meals.length;
    };
    
});
