/**
 * Created by dtx on 16/7/8.
 * description:元数据管理
 */

angular.module("app.dataManagement",["app.dataManagement.dataSituation","app.dataManagement.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dataManagement', {
                url: '/dataManagement',
                views: {
                    'center': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'dataManagementCtrl'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'foot@dataManagement': {
                        templateUrl: ''
                    }
                }
            })
    }]);
