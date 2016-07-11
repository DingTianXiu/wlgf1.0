/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.dataManagement.dataSituation",[])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dataManagement.dataSituation', {
                url: '/dataSituation',
                views: {
                    'center@': {
                        templateUrl: './dataManagement/list.html'
                    },
                    'content@dataManagement.dataSituation': {
                        templateUrl: './dataManagement/dataSituation/dataSituation.html'
                    },
                    'head': {
                        templateUrl: './public/head.html'
                    },
                    'foot@dataManagement.dataSituation': {
                        templateUrl: ''
                    }
                }
            })
    }]);