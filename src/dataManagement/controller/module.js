/**
 * Created by dtx on 16/7/10.
 * description: 左侧菜单栏控制器
 */
angular.module("app.dataManagement.controller",[])
    .controller("dataManagementCtrl",["menuData","$scope",function (menuData,$scope) {

        /*配置侧边导航栏*/
        $scope.menuData = menuData.dataManagement;
    }]);