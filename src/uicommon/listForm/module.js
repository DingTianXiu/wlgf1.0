/**
 * Created by dtx on 16/7/12.
 * description: 表格
 */


/*target: 复用后台系统列表组件
 * 1. 表格 title ,通过 titleList 数组传入
 * 2. 表格 repeat 的内容,通过 listData 数组传入
 * 3. 表格数据 repeat 的枚举 code 通过 listItem 数组传入,其中 code 是绑定数据的字段,filter 是绑定数据需要进行过滤的过滤器名,
 * 需要两个变量展示在同一个td中,对象可以通过加号链接 {code:'province+city',filter:'self+self'},暂时关闭
 * 3. 表格数据的操作 通过 actList 数组传入,actName 如操作名为'编辑' ,click 事件触发的函数通过属性 actFun 字段传入
 * */


angular.module('app.directive.lsitForm',[])
    .directive('listForm',function () {
        return{
            restrict:'AE',
            replace: true,
            scope:{
                titleList:'=',
                listData:'=',
                listItem:'=',
                actList:'=',
                showIndex:'='
            },
            template:'<div class="listForm">'+
            '<table>'+
            '<thead>'+
            '<tr>'+
            '<th ng-repeat="title in titleList"><span ng-bind="title"></span></th>'+
            '</tr>'+
            '</thead>'+
            '<tbody>'+
            '<tr ng-repeat="item in listData" ng-if="listData !== 0">'+
            '<td ng-if="showIndex" ng-bind="$index+1"></td>'+
            '<td ng-repeat="key in listItem">'+
            // '<span ng-if="key.isArray" ng-repeat="childItem in key" ng-bind="item[childItem.code]|{{childItem.filter}}"></span>'+
            '<span ng-if="!key.isArray" ng-bind="item[key.code]"></span>'+
            '</td>'+
            '<td ng-if="!!actList"><!—操作—>'+
            '<span><a ng-repeat="act in actList" ng-bind="act.actName" ng-click="act.actFun(item)"></a ></span>'+
            '</td>'+
            '</tr>'+
            '<tr ng-if="listData.length === 0">'+
            '<td colspan={{titleList.length}}>'+
            '暂无数据'+
            '</td>'+
            '</tr>'+
            '</tbody>'+

            '</table>'+
            '</div>',
            link:function(scope, iElement, iAttrs, controller) {
                // console.log("link函数",scope)

            },
            // controller:function controller($scope, $element, $attrs, $transclude){
            //     $scope.listItem.forEach(function (ele,index){
            //         if(ele.code.split('+').length > 1){
            //             let _codeArr = ele.code.split('+');
            //             let _filterArr = ele.filter.split('+');
            //             $scope.listItem[index] = [];
            //             _codeArr.forEach(function(){
            //                 $scope.listItem[index].push({code:e,filter:_filterArr[_index]})
            //             });
            //             $scope.listItem[index].isArray= true;
            //         }
            //     })
            // }
        }
    });