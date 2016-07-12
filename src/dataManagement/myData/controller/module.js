/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.dataManagement.myData.controller",[])
    .controller("myDataCtrl",["$scope",function ($scope) {

        /*宽度随浏览器clientWidth高度改变而改变*/
        var width = document.body.clientWidth;
        document.getElementsByClassName("myData")[0].style.width = (width-201)+"px";
        window.onresize = function () {
            width = document.body.scrollWidth;
            document.getElementsByClassName("myData")[0].style.width = (width-201)+"px";
        }

        /*tab切换*/
        $scope.enabled = true;
        $scope.collection = false;
        $scope.management = false;
        $scope.selectEnabled = function () {
            $scope.enabled = true;
            $scope.collection = false;
            $scope.management = false;
        },
        $scope.selectCollection = function () {
            $scope.enabled = false;
            $scope.collection = true;
            $scope.management = false;
        },
        $scope.selectManagement = function () {
            $scope.enabled = false;
            $scope.collection = false;
            $scope.management = true;
        }
    }]);