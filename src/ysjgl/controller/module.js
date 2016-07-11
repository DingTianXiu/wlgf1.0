/**
 * Created by dtx on 16/7/10.
 * description: 左侧菜单栏控制器
 */
angular.module("app.ysjgl.controller",[])
    .controller("ysjglCtrl",["menuData","$scope",function (menuData,$scope) {
        $scope.menuData = menuData.ysjgl;
        console.log($scope.menuData);
    }]);