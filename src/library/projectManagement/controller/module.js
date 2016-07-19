/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.library.projectManagement.controller",[])
    .controller("projectManagementCtrl",[function () {

        /*宽度随浏览器clientWidth高度改变而改变*/
        var width = document.body.clientWidth;
        document.getElementsByClassName("projectManagement")[0].style.width = (width-201)+"px";
        window.onresize = function () {
            width = document.body.scrollWidth;
            document.getElementsByClassName("projectManagement")[0].style.width = (width-201)+"px";
        };
    }]);