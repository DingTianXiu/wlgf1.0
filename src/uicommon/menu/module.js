/**
 * Created by dtx on 16/7/8.
 * description:侧边导航栏
 */


angular.module("app.directive.menu",[])
    .directive("menu",[function () {
        return{
            restrict: 'A',
            template:
                '<div>'+
                    '<ul>'+
                        '<li>元数据管理</li>'+
                        '<li ng-repeat="d in data.children" ui-sref="{{d.sref}}">{{d.name}}</li>'+
                    '</ul>'+
                '</div>',
            replace: true,
            scope:{
                data: '='
            }
        }
    }]);