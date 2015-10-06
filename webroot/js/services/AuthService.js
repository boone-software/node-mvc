/**
 * Created by westopher on 10/6/15.
 */
app.factory('auth', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {

    var Token,
        User;

    function register (user_info) {
        var deferred = $q.defer();

        $http
            .post('/auth/register', user_info)
            .success(function (response) {
                Token = response.token;
                $http.defaults.headers.common.Authorization = Token;
                User = response.user;

                deferred.resolve(User);
            })
            .error(function (response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    function login (user_info) {
        var deferred = $q.defer();

        $http
            .post('/auth/token', user_info)
            .success(function (response) {
                Token = response.token;
                $http.defaults.headers.common.Authorization = Token;
                User = response.user;

                deferred.resolve(User);
            })
            .error(function (response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    function logout (callback) {
        callback = callback || function(){};
        Token = null;
        $http.defaults.headers.common.Authorization = null;
        callback();
    }

    function user (key) {
        if (key) {
            return User[key];
        }
        return User;
    }

    return {
        register: register,
        login: login,
        logout: logout,
        user: user
    }

}]);