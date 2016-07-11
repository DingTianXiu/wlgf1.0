/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.dataManagement.search",["app.dataManagement.search.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dataManagement.search', {
                url: '/search',
                views: {
                    'center@': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'dataManagementCtrl'
                    },
                    'content@dataManagement.search': {
                        templateUrl: './dataManagement/search/views/search.html',
                        controller: 'searchCtrl'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'foot@dataManagement.search': {
                        templateUrl: ''
                    }
                }
            })
    }]);