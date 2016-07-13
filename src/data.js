/**
 * Created by dtx on 16/7/13.
 * description :模拟数据
 */

angular.module("app.testData",[])
    .constant("TESTDATA",[
        {name:'ruby',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:true,collection:true,effectiveness:true},
        {name:'ruby1',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:true,collection:false,effectiveness:true},
        {name:'ruby2',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:true,collection:true,effectiveness:true},
        {name:'ruby3',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:true,collection:false,effectiveness:true},
        {name:'ruby4',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:false,collection:true,effectiveness:true},
        {name:'ruby5',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:false,collection:true,effectiveness:true},
        {name:'ruby6',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:false,collection:true,effectiveness:true},
        {name:'ruby7',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:true,collection:false,effectiveness:true},
        {name:'ruby8',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:true,collection:false,effectiveness:true},
        {name:'ruby9',createTime:'哪天啊',physicsStore:'8TB',live:'8天',usable:false,collection:true,effectiveness:false}
    ])
    .value("USER",{
        userName: 'ruby',
        passWord: '123',
        name: 'ruby',
        department: '大前端',
        sex: '男',
        email: 'ruby@adtime.com',
        mobile: '110',
        isLogin: 'true'
    });