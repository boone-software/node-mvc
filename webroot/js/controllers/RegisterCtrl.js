/**
 * Created by westopher on 10/6/15.
 */
app.controller('RegisterCtrl', ['$scope', 'auth', function ($scope, auth) {

    $scope.username = null;
    $scope.password = null;

    $scope.register = function () {
        auth.register({
            username: $scope.username,
            password: $scope.password
        }).then(function (response) {
            console.log(response);
        });
    }


}]);