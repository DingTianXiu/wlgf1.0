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



        /*用户认证--验证码验证*/
        $scope.code = "";
        $scope.codeWrong = false;
        var authWatch = $scope.$watch(function () {
                    return $scope.code
                },function(){
                if($scope.code.length==4){
                    login.checkAuth()
                        .then(function (isTrue) {
                            $scope.isTrue = isTrue;
                            if(!isTrue){
                                $scope.codeWrong = true;
                            }else{
                                authWatch();
                            }
                        })
                }else if($scope.code.length>4){
                    $scope.codeWrong = true;
                }else{
                    $scope.codeWrong = false;
                }
            });
        $scope.codeClick = function () {
                $scope.code = "";
                $scope.codeWrong = false;
        };

        /*用户认证--登录认证*/
        $scope.userWrong = false;
        $scope.passwordWrong = false;
        $scope.goLogin = function () {
            if($scope.isTrue){
                login.goLogin()
                    .then(function (data) {
                        if(data){
                            $state.go(home);
                        }else{
                            //验证失败
                            $scope.userWrong = true;
                            $scope.passwordWrong = true;
                        }
                    });
            }else{
                alert("请输入正确验证码");
            }
        };
        $scope.userClick = function () {
            $scope.userWrong = false;
        };
        $scope.passwordClick = function () {
            $scope.passwordWrong = false;
            $scope.auth.passWord = "";
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