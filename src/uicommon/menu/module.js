/**
 * Created by dtx on 16/7/8.
 * description:侧边导航栏
 */


angular.module("app.directive.menu",[])
    .directive("menu",[function () {
        return{
            restrict: 'A',
            template:
                    '<ul>'+
                        '<li>{{data.name}}</li>'+
                        '<li ng-repeat="d in data.children" ui-sref="{{d.sref}}">{{d.name}}</li>'+
                    '</ul>',
            // replace: true,
            scope:{
                data: '='
            }
        }
    }]);