/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.library.projectClassification",["app.library.projectClassification.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('library.projectClassification', {
                url: '/projectClassification',
                views: {
                    'center@': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'libraryCtrl'
                    },
                    'content@library.projectClassification': {
                        templateUrl: './library/projectClassification/views/projectClassification.html',
                        controller: 'projectClassificationCtrl'
                    }
                }
            })
    }]);