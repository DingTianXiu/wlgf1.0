/**
 *
 * Created by dtx on 16/7/11.
 */

angular.module("app.library",[
    "app.library.controller",
    "app.library.projectManagement",
    "app.library.projectClassification"
])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('library', {
                url: '/library',
                views: {
                    'center': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'libraryCtrl'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'foot@library': {
                        templateUrl: ''
                    }
                }
            })
    }]);

