/**
 *
 * Created by dtx on 16/7/6.
 * description: 项目应用,仅作模块引入
 */

angular.module("wlgf",[
    "ui.router",
    "app.config",
    "app.directive",
    "app.public",
    "app.ysjgl"
])
    .controller("appController",["menuData",function (menuData) {
        // console.log(menuData);
    }]);