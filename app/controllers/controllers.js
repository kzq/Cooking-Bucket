app.controller('MenuCtrl',function($scope,$location){
    $scope.isActive = function(path){
        if($location.path().substr(0,path.length) == path){
            return true;
        } else {
            return false;
        }
    };
});
