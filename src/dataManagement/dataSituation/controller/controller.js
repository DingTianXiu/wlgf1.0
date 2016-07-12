/**
 * Created by dtx on 16/7/11.
 * description : controller of dataSituation
 */

angular.module("app.dataManagement.dataSituation.controller",[])
    .controller("dataSituationCtrl",[function () {

        /*center_home宽度随浏览器clientWidth高度改变而改变*/
        var width = document.body.clientWidth;
        document.getElementsByClassName("dataSituation")[0].style.width = (width-201)+"px";
        window.onresize = function () {
            width = document.body.scrollWidth;
            document.getElementsByClassName("dataSituation")[0].style.width = (width-201)+"px";
            height = document.body.clientHeight;
            document.getElementsByClassName("menu")[0].style.height = (height-86)+"px";
        }

    }]);