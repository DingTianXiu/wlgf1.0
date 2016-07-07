/**
 * Created by dtx on 16/7/7.
 */

angular.module("app.public.login.controller",[])
    .controller("loginCtrl",["$scope",function ($scope) {
        
        //center_home高度随浏览器clientHeight高度改变而改变
        var height = document.body.clientHeight;
        document.getElementsByClassName("login")[0].style.height = (height-80)+"px";
        window.onresize = function () {
            height = document.body.clientHeight;
            document.getElementsByClassName("login")[0].style.height = (height-80)+"px";
        }
    }]);