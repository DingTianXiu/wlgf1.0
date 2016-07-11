/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.ysjgl.sjgk",[])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('ysjgl.sjgk', {
                url: '/sjgk',
                views: {
                    'center@': {
                        templateUrl: './ysjgl/list.html'
                    },
                    'content@ysjgl.sjgk': {
                        templateUrl: './ysjgl/sjgk/sjgk.html'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'foot@ysjgl.sjgk': {
                        templateUrl: ''
                    }
                }
            })
    }]);