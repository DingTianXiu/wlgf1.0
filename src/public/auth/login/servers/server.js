/**
 * Created by dtx on 16/7/19.
 */

angular.module("app.public.login.server",[])
    .factory("login",["$http","$q",function ($http,$q) {
        return{
            goLogin: function () {
                var defer = $q.defer();
                $http({
                    method: 'GET',
                    url: 'https://120.26.45.186:8443/petpet/login.json?userName=xiaodexiaode&password=chunbonanyuan',
                    params:{
                        
                    }
                })
                    .success(function (data) {
                        defer.resolve(data);
                        console.log("success");
                    })
                    .error(function () {
                        console.log('failed');
                    });
                return defer.promise;
            }
        }
    }]);