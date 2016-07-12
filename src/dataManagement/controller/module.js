/**
 * Created by dtx on 16/7/10.
 * description: 左侧菜单栏控制器
 */
angular.module("app.dataManagement.controller",[])
    .controller("dataManagementCtrl",["menuData","$scope",function (menuData,$scope) {

        /*配置侧边导航栏*/
        $scope.menuData = menuData.dataManagement;

        /*center_home高度随浏览器clientHeight高度改变而改变*/
        var height = document.body.clientHeight;
        document.getElementsByClassName("menu")[0].style.height = (height-86)+"px";
    }]);