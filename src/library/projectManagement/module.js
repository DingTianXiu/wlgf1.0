/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.library.projectManagement",["app.library.projectManagement.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('library.projectManagement', {
                url: '/projectManagement',
                views: {
                    'center@': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'libraryCtrl'
                    },
                    'content@library.projectManagement': {
                        templateUrl: './library/projectManagement/views/projectManagement.html',
                        controller: 'projectManagementCtrl'
                    }
                }
            })
    }]);