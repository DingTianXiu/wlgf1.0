/**
 * Created by dtx on 16/7/8.
 * description:元数据管理
 */

angular.module("app.ysjgl",["app.ysjgl.sjgk","app.ysjgl.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('ysjgl', {
                url: '/ysjgl',
                views: {
                    'center': {
                        templateUrl: './ysjgl/list.html',
                        controller: 'ysjglCtrl'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'foot@ysjgl': {
                        templateUrl: ''
                    }
                }
            })
    }]);
