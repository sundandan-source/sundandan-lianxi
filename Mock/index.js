const Mock= require('mockjs');

// 模拟列表数据
const list=Mock.mock({"listdata|100":[
    {id:"@id",
    name:"@cname",
    desc:"@ctitle(2,10)",
    img:"@image(100X100,@color,@city)",
    hasActivities:"@boolean" //是否有活动
}
]});
module.exports={
    list
}

