/**
 * Created by dtx on 16/7/8.
 * description:元数据管理
 */

angular.module("app.dataManagement",[
    "app.dataManagement.dataSituation",
    "app.dataManagement.controller",
    "app.dataManagement.myData",
    "app.dataManagement.search",
    "app.dataManagement.categoryConfig"
])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dataManagement', {
                url: '/dataManagement',
                abstract: true,
                views: {
                    'center': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'dataManagementCtrl'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'content@dataManagement': {
                        templateUrl: './dataManagement/dataSituation/dataSituation.html',
                        controller: 'dataSituationCtrl'
                    },
                    'foot@dataManagement': {
                        templateUrl: ''
                    }
                }
            })
        
    }]);
