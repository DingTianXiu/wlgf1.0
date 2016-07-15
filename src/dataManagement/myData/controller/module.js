/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.dataManagement.myData.controller",[])
    .controller("myDataCtrl",["$scope","TESTDATA","$state",function ($scope,TESTDATA,$state) {

        /*宽度随浏览器clientWidth高度改变而改变*/
        var width = document.body.clientWidth;
        $scope.height = document.body.clientHeight;
        document.getElementsByClassName("myData")[0].style.width = (width-201)+"px";
        document.getElementsByClassName("listForm")[0].style.height = ($scope.height-193)+"px";
        window.onresize = function () {
            width = document.body.scrollWidth;
            document.getElementsByClassName("myData")[0].style.width = (width-201)+"px";
            $scope.height = document.body.scrollHeight;
            // console.log($scope.height-86);
            document.getElementsByClassName("listForm")[0].style.maxHeight = ($scope.height-193)+"px";
            document.getElementsByClassName("menu")[0].style.height = ($scope.height-86)+"px";
            // console.log(document.getElementsByClassName("menu")[0]);
        };

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
        };

        /*数据列表*/
        $scope.editChannel = function (item) {
            $state.go("dataManagement.myData.dataDetail");
            $scope.item = item;
        };
        $scope.dataList = TESTDATA;
        $scope.titleList =["表名","创建时间","物理储存","生命周期","操作"];
        $scope.listItem = [
            {code:'name',filter:'self'},
            {code:'createTime',filter:'self'},
            {code:'physicsStore',filter:'self'},
            {code:'live',filter:'self'}
        ];
        $scope.actList = [
            {actName:'查看',actFun:$scope.editChannel}
        ];
    }]);