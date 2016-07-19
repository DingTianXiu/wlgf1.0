/**
 * Created by dtx on 16/7/7.
 */

angular.module("app.public.login.controller",["app.public.login.server"])
    .controller("loginCtrl",["$rootScope","$scope","USER","$state","login",function ($rootScope,$scope,USER,$state,login) {

        /*center_home高度随浏览器clientHeight高度改变而改变*/
        var height = document.body.clientHeight;
        document.getElementsByClassName("login")[0].style.height = (height-80)+"px";
        window.onresize = function () {
            height = document.body.clientHeight;
            document.getElementsByClassName("login")[0].style.height = (height-80)+"px";
        };

        /*表单验证*/
        $scope.select = false;
        $scope.formClick = function () {
            $scope.select = true;
        };

        /*test用户认证*/
        $rootScope.isLogin =false;
        $rootScope.USER = USER;
        $scope.goLogin = function () {
                //
                // login.goLogin()
                //     .then(function (data) {
                //         console.log(data);
                //     });
                if($scope.loginForm.$valid && $scope.loginForm.$dirty){
                    if($scope.auth.userName==USER.userName&&$scope.auth.password==USER.passWord){
                        $state.go('home');
                        $rootScope.isLogin = true;
                        console.dir($scope.loginForm.$valid);
                    }else{
                        alert("请输入正确用户名及密码");
                    }
                }else{
                    alert("请输入用户名及密码");
                }
            };


        /*忘记密码*/
        $scope.resetPasswordBtn = function () {
            $scope.resetPassword = true;
        };
        $scope.getCodeBtn = function () {
            if($scope.resetPsswordForm.$valid && $scope.resetPsswordForm.$dirty) {
                $scope.getCode = true;
            }
        };
        $scope.resetBtn = function () {
            if($scope.getCodeForm.$valid && $scope.getCodeForm.$dirty) {
                $scope.reset = true;
            }
        };


    }]);