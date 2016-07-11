/**
 * Created by dtx on 16/7/8.
 */
var config = angular.module('app.config',[]);
//左侧目录与目录下的列表
config.constant('menuData', {
    dataManagement:{
        state: '', icon: '', name: '元数据管理', children: [
            {sref: 'dataManagement.sjgk', name: '数据概况'},
            {sref: 'dataManagement.myData', name: '我的元数据'},
            {sref: 'dataManagement.search', name: '全局索引'},
            {sref: 'dataManagement.categoryConfig', name: '类目配置'},
        ]
    },
    bqgl:{},
    kshzj:{},
    library:{
        state: '', icon: '', name: '知识库', children: [
            {sref: 'library.projectManagement', name: '项目管理'},
            {sref: 'library.projectClassification', name: '项目行业类目'}
        ]
    }
});