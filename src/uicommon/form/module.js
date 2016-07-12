/**
 * Created by dtx on 16/7/12.
 * description: 表格
 */

angular.module("app.directive.form",[])
    .directive("form",[function () {
        return{
            restrict: "A",
            template:
            "<div>" +
                "<table>"+
                    "<tr>" +
                        "<th ng-repeat='fhd in formHeadData'>{{fhd.name}}</th>"+
                    "</tr>"+
                    "<tr ng-repeat='fcd in formContentData'>" +
                        "<td></td>"+
                    "</tr>"+
                "</table>"+
            "</div>",
            replace: true,
            scope: {
                formHeadData: "=",
                formContentData: "="
            }
        }
    }]);