app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        }).when('/cart', {
            templateUrl: 'partials/cart.html',
            controller: 'cartController'
        }).otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
});
