app.controller('homeController', function($scope, $http) {
    $http.get('teas.JSON').success(function(data) {
        $scope.teas = data;
    })
})
