/**
 * Created by dtx on 16/7/12.
 */

angular.module("app.public.headController",[])
    .controller("headCtrl",["$scope","menuData","$state",function ($scope,menuData,$state) {
        $scope.tabData = menuData.tabData.arrData;
        $scope.selectTab = function (index) {
            $scope.index = index;
            $state.go($scope.tabData[index].sref);
        }
    }]);