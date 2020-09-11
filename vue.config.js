let {
    list
} = require("./mock");
let bodyParser=require('body-parser')
module.exports = {
    devServer: {
        before(app) {
            app.use(bodyParser.json());
            //获取数据列表
            app.get('/api/list', (req, res) => {
               setTimeout(() => {
                res.json({
                    code: 0,
                    data: list.listdata
                }) 
               }, 1000);
            });

            //登录
            app.post('/api/login',(req,res)=>{
                let {username,passwored}=req.body;
                if(username==='123'&&passwored==='123'){
                    //判断用户名字，判断用户密码
                    res.json({
                        code:0,
                        token:'123'+new Date().getTime()
                    })
                }else{
                    res.json({
                        //判断如果是1就错误弹出弹框
                        code:1,
                        token:'',
                        message:'用户密码错误'
                    })
                }
            })
        }
    }
}