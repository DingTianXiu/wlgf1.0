/**
 * Created by dtx on 16/7/13.
 */

angular.module("app.dataManagement.myData.dataDetail",["app.dataManagement.myData.dataDetail.controller"])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dataManagement.myData.dataDetail', {
                url: '/dataDetail',
                views: {
                    'center@': {
                        templateUrl: './dataManagement/list.html',
                        controller: 'dataManagementCtrl'
                    },
                    'content@dataManagement.myData.dataDetail': {
                        templateUrl: './dataManagement/myData/dataDetail/views/dataDetail.html',
                        controller: 'dataDetailCtrl'
                    }
                }
            })
    }]);