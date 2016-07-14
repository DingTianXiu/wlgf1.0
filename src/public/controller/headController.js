/**
 * Created by dtx on 16/7/12.
 */

angular.module("app.public.headController",[])
    .controller("headCtrl",["$scope","menuData","$state","$location",function ($scope,menuData,$state,$location) {

        /*一级目录路由跳转,状态改变*/
        $scope.tabData = menuData.tabData.arrData;
        $scope.index = null;
        $scope.selectTab = function (index) {
            $scope.index = index;
            $state.go($scope.tabData[index].sref);
        }

        /*test退出登录*/
        $scope.out = function () {
            $state.go('login');
        }
        
    }]);