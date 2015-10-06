/**
 * Created by westopher on 10/6/15.
 */
app.controller('LoginCtrl', ['$scope', 'auth', function ($scope, auth) {

    $scope.username = null;
    $scope.password = null;

    $scope.login = function () {
        auth.login({
            username: $scope.username,
            password: $scope.password
        }).then(function (response) {
            console.log(response);
        });
    }


}]);