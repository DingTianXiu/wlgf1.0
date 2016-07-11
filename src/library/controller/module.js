/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.library.controller",[])
    .controller("libraryCtrl",["menuData","$scope",function (menuData,$scope) {
        
        /*配置侧边导航栏*/
        $scope.menuData = menuData.library;
    }]);