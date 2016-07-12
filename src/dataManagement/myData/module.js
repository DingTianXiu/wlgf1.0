/**
 * Created by dtx on 16/7/11.
 */

angular.module("app.dataManagement.myData",["app.dataManagement.myData.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dataManagement.myData', {
                url: '/myData',
                views: {
                    'center@': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'dataManagementCtrl'
                    },
                    'content@dataManagement.myData': {
                        templateUrl: './dataManagement/myData/views/myData.html',
                        controller: 'myDataCtrl'
                    }
                }
            })
    }]);