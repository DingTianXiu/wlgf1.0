/**
 *
 * Created by dtx on 16/7/6.
 * description: 项目应用,仅作模块引入
 */

angular.module("app",[
    "ui.router",
    "app.testData",
    "app.config",
    "app.directive",
    "app.public",
    "app.dataManagement",
    "app.library"
])
    .controller("appController",["USER","TESTDATA",function (USER,TESTDATA) {
        
    }]);