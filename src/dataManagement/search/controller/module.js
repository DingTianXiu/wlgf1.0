/**
 * Created by dtx on 16/7/11.
 */
angular.module("app.dataManagement.search.controller",[])
    .controller("searchCtrl",[function () {
        
        
        /*center_home宽度随浏览器clientWidth高度改变而改变*/
        var width = document.body.clientWidth;
        document.getElementsByClassName("search")[0].style.width = (width-201)+"px";
        window.onresize = function () {
            width = document.body.scrollWidth;
            document.getElementsByClassName("search")[0].style.width = (width-201)+"px";
        }
    }]);