/**
 *
 * Created by dtx on 16/7/6.
 * description: 项目应用,仅作模块引入
 */

angular.module("wlgf",[
    "app.public",
    "app.ysjgl"
])
    .controller("wlgfController",function () {
        console.log("papapa");
    });