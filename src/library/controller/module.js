/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.library.controller",[])
    .controller("libraryCtrl",["menuData","$scope",function (menuData,$scope) {
        
        /*配置侧边导航栏*/
        $scope.menuData = menuData.library;

        /*center_home高度随浏览器clientHeight高度改变而改变*/
        var height = document.body.clientHeight;
        document.getElementsByClassName("menu")[0].style.height = (height-86)+"px";
        window.onresize = function () {
            height = document.body.clientHeight;
            document.getElementsByClassName("menu")[0].style.height = (height-86)+"px";
        }
    }]);