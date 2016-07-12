/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.dataManagement.dataSituation",["app.dataManagement.dataSituation.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dataManagement.dataSituation', {
                url: '/dataSituation',
                views: {
                    'center@': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'dataManagementCtrl'
                    },
                    'content@dataManagement.dataSituation': {
                        templateUrl: './dataManagement/dataSituation/dataSituation.html',
                        controller: 'dataSituationCtrl'
                    }
                }
            })
    }]);