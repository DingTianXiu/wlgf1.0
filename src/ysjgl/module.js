/**
 * Created by dtx on 16/7/8.
 * description:元数据管理
 */

angular.module("app.ysjgl",["ui.router","app.ysjgl.sjgk"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('ysjgl', {
                url: '/ysjgl',
                views: {
                    'center': {
                      templateUrl: './ysjgl/list.html'
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
