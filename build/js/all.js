angular.module("app",["ui.router","app.config","app.directive","app.public","app.dataManagement","app.library"]).controller("appController",["menuData",function(a){}]);
var config=angular.module("app.config",[]);config.constant("menuData",{dataManagement:{state:"",icon:"",name:"元数据管理",children:[{sref:"dataManagement.dataSituation",name:"数据概况"},{sref:"dataManagement.myData",name:"我的元数据"},{sref:"dataManagement.search",name:"全局索引"},{sref:"dataManagement.categoryConfig",name:"类目配置"}]},bqgl:{},kshzj:{},library:{state:"",icon:"",name:"知识库",children:[{sref:"library.projectManagement",name:"项目管理"},{sref:"library.projectClassification",name:"项目行业类目"}]}});
angular.module("app.dataManagement",["app.dataManagement.dataSituation","app.dataManagement.controller","app.dataManagement.myData","app.dataManagement.search","app.dataManagement.categoryConfig"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("dataManagement",{url:"/dataManagement",views:{center:{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},head:{templateUrl:"./public/head.html"},"content@dataManagement":{templateUrl:"./dataManagement/dataSituation/dataSituation.html",controller:"dataSituationCtrl"},"foot@dataManagement":{templateUrl:""}}})}]);
angular.module("app.library",["app.library.controller","app.library.projectManagement","app.library.projectClassification"]).config(["$stateProvider","$urlRouterProvider",function(r,a){r.state("library",{url:"/library",views:{center:{templateUrl:"./dataManagement/list.html",controller:"libraryCtrl"},head:{templateUrl:"./public/head.html"},"foot@library":{templateUrl:""}}})}]);
angular.module("app.public",["app.public.login"]).config(["$stateProvider","$urlRouterProvider",function(l,e){e.when("","/login"),l.state("login",{url:"/login",views:{center:{templateUrl:"./public/auth/login/login.html",controller:"loginCtrl"},head:{templateUrl:"./public/head.html"},foot:{templateUrl:"./public/foot.html"}}}).state("home",{url:"/home",views:{center:{templateUrl:"./public/center_home.html"},head:{templateUrl:"./public/head.html"},foot:{templateUrl:""}}})}]);
angular.module("app.directive",["app.directive.menu"]);
angular.module("app.dataManagement.categoryConfig",["app.dataManagement.categoryConfig.controller"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("dataManagement.categoryConfig",{url:"/categoryConfig",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},"content@dataManagement.categoryConfig":{templateUrl:"./dataManagement/categoryConfig/views/categoryConfig.html",controller:"categoryConfigCtrl"},head:{templateUrl:"./public/head.html"},"foot@dataManagement.categoryConfig":{templateUrl:""}}})}]);
angular.module("app.dataManagement.controller",[]).controller("dataManagementCtrl",["menuData","$scope",function(a,n){n.menuData=a.dataManagement}]);
angular.module("app.dataManagement.dataSituation",["app.dataManagement.dataSituation.controller"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("dataManagement.dataSituation",{url:"/dataSituation",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},"content@dataManagement.dataSituation":{templateUrl:"./dataManagement/dataSituation/dataSituation.html",controller:"dataSituationCtrl"},head:{templateUrl:"./public/head.html"},"foot@dataManagement.dataSituation":{templateUrl:""}}})}]);
angular.module("app.dataManagement.myData",["app.dataManagement.myData.controller"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("dataManagement.myData",{url:"/myData",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},"content@dataManagement.myData":{templateUrl:"./dataManagement/myData/views/myData.html",controller:"myDataCtrl"},head:{templateUrl:"./public/head.html"},"foot@dataManagement.myData":{templateUrl:""}}})}]);
angular.module("app.dataManagement.search",["app.dataManagement.search.controller"]).config(["$stateProvider","$urlRouterProvider",function(a,e){a.state("dataManagement.search",{url:"/search",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},"content@dataManagement.search":{templateUrl:"./dataManagement/search/views/search.html",controller:"searchCtrl"},head:{templateUrl:"./public/head.html"},"foot@dataManagement.search":{templateUrl:""}}})}]);
angular.module("app.library.controller",[]).controller("libraryCtrl",["menuData","$scope",function(r,a){a.menuData=r.library}]);
angular.module("app.library.projectClassification",["app.library.projectClassification.controller"]).config(["$stateProvider","$urlRouterProvider",function(t,r){t.state("library.projectClassification",{url:"/projectClassification",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"libraryCtrl"},"content@library.projectClassification":{templateUrl:"./library/projectClassification/views/projectClassification.html",controller:"projectClassificationCtrl"},head:{templateUrl:"./public/head.html"},"foot@library.projectClassification":{templateUrl:""}}})}]);
angular.module("app.library.projectManagement",["app.library.projectManagement.controller"]).config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("library.projectManagement",{url:"/projectManagement",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"libraryCtrl"},"content@library.projectManagement":{templateUrl:"./library/projectManagement/views/projectManagement.html",controller:"projectManagementCtrl"},head:{templateUrl:"./public/head.html"},"foot@library.projectManagement":{templateUrl:""}}})}]);

angular.module("app.directive.menu",[]).directive("menu",[function(){return{restrict:"A",template:'<div><ul><li>{{data.name}}</li><li ng-repeat="d in data.children" ui-sref="{{d.sref}}">{{d.name}}</li></ul></div>',replace:!0,scope:{data:"="}}}]);
angular.module("app.dataManagement.categoryConfig.controller",[]).controller("categoryConfigCtrl",[function(){}]);
angular.module("app.dataManagement.dataSituation.controller",[]).controller("dataSituationCtrl",[function(){}]);
angular.module("app.dataManagement.myData.controller",[]).controller("myDataCtrl",[function(){}]);
angular.module("app.dataManagement.search.controller",[]).controller("searchCtrl",[function(){}]);
angular.module("app.library.projectClassification.controller",[]).controller("projectClassificationCtrl",[function(){}]);
angular.module("app.library.projectManagement.controller",[]).controller("projectManagementCtrl",[function(){}]);
angular.module("app.public.login",["app.public.login.controller"]);
angular.module("app.public.login.controller",[]).controller("loginCtrl",["$scope",function(e){var n=document.body.clientHeight;document.getElementsByClassName("login")[0].style.height=n-80+"px",window.onresize=function(){n=document.body.clientHeight,document.getElementsByClassName("login")[0].style.height=n-80+"px"}}]);