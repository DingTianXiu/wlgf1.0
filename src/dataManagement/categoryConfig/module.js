/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.dataManagement.categoryConfig",["app.dataManagement.categoryConfig.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dataManagement.categoryConfig', {
                url: '/categoryConfig',
                views: {
                    'center@': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'dataManagementCtrl'
                    },
                    'content@dataManagement.categoryConfig': {
                        templateUrl: './dataManagement/categoryConfig/views/categoryConfig.html',
                        controller: 'categoryConfigCtrl'
                    }
                }
            })
    }]);