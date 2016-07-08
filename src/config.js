/**
 * Created by dtx on 16/7/8.
 */
var config = angular.module('app.config',[]);
//左侧目录与目录下的列表
config.constant('menuData', {
    ysjgl:{
        state: '', icon: '', name: 'ysjgl', children: [
            {sref: 'app.ysjgl.sjgk', name: '数据概况'},
            {sref: 'app.ysjgl.wdysj', name: '我的元数据'},
            {sref: 'app.ysjgl.qjsy', name: '全局索引'},
            {sref: 'app.ysjgl.lmpz', name: '类目配置'},
        ]
    },
    bqgl:{},
    kshzj:{},
    zsk:{}
});