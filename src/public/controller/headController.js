/**
 * Created by dtx on 16/7/12.
 */

angular.module("app.public.headController",[])
    .controller("headCtrl",["$scope","menuData","$state","$location",function ($scope,menuData,$state,$location) {
        $scope.tabData = menuData.tabData.arrData;
        $scope.selectTab = function (index) {
            $state.go($scope.tabData[index].sref)
                .then(function (result) {
                    $scope.index = index;
                    console.log($scope.index);
                    console.log(result);
                })
            // if($scope.tabData[index].sref==$location.$$path.name)
        }

        /*test退出登录*/
        $scope.out = function () {
            $state.go('login');

        }
    }]);