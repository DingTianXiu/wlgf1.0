/**
 * Created by dtx on 16/7/7.
 */
angular.module("app.public",["app.public.login"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/login');
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'center': {
                        templateUrl: './public/auth/login/login.html',
                        controller: 'loginCtrl'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'foot': {
                        templateUrl: './public/foot.html'
                    }
                }
            })
            .state('home',{
                url: '/home',
                views: {
                    'center': {
                        templateUrl: './public/center_home.html'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'foot': {
                        templateUrl: ''
                    }
                }
            })
    }])