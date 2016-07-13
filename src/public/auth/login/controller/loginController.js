/**
 * Created by dtx on 16/7/7.
 */

angular.module("app.public.login.controller",[])
    .controller("loginCtrl",["$rootScope","$scope","USER","$state",function ($rootScope,$scope,USER,$state) {

        /*center_home高度随浏览器clientHeight高度改变而改变*/
        var height = document.body.clientHeight;
        document.getElementsByClassName("login")[0].style.height = (height-80)+"px";
        window.onresize = function () {
            height = document.body.clientHeight;
            document.getElementsByClassName("login")[0].style.height = (height-80)+"px";
        }

        /*test用户认证*/
        $rootScope.isLogin =false;
        $rootScope.USER = USER;
        $scope.goLogin = function () {
            if($scope.auth){
                if($scope.auth.userName==USER.userName&&$scope.auth.password==USER.passWord){
                    $state.go('home');
                    $rootScope.isLogin = true;
                }else{
                    alert("请输入正确用户名及密码");
                }
            }else{
                alert("请输入用户名及密码");
            }
        }
    }]);