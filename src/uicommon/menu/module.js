/**
 * Created by dtx on 16/7/8.
 * description:侧边导航栏
 */


angular.module("app.directive.menu",[])
    .directive("menu",[function () {
        return{
            restrict: 'AE',
            template:
                    '<ul>'+
                        '<li>{{data.name}}</li>'+
                        '<li ng-repeat="d in data.children" ng-click="selected($index)"  ng-class="{select:b&&a==$index||d.sref==sref}">{{d.name}}</li>'+
                    '</ul>',
            // replace: true,
            scope:{
                data: '=',
                sref: '=',
                a: '=',
                b: '='
            },
            controller: ["$state","$scope",function ($state,$scope) {
                // $scope.isSelected = true;
                $scope.selected = function (index) {
                    if($state.current.name.indexOf($scope.data.children[index].sref>0)){
                        $scope.isSelected = true;
                    }
                    $state.go($scope.data.children[index].sref,{args:{
                        index:index,
                        isSelected:$scope.isSelected
                    }});
                };
            }]
        }
    }]);