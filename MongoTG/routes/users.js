var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel");

/* GET users listing. */


router.get('/logout', function(req, res) {
  req.session.username = null;
  res.send("注销成功");
});

router.post('/regist', function(req, res, next) {
	UserModel.find({username: req.body.username}, (err, docs)=>{
		var result = {
			code: 1
		}
		if(err || docs.length > 0) {
			result.code = -99;
			result.message = "用户名存在或者服务器出错了";
			res.send(JSON.stringify(result));
			return;
		}
		var um = new UserModel();
		um.username = req.body.username;
		um.psw = req.body.psw;
		
		um.save((err)=>{
			if(err) {
				result.code = -98;
				result.message = "注册失败";				
			} 
			res.send(JSON.stringify(result));
		})
	})
});


router.post("/login",(req, res, next)=>{
	UserModel.find({username:req.body.username,psw:req.body.psw},(err, docs)=>{
		var result = {
			code: 1
		}
		if(err || docs.length == 0) {
			result.code = -97;
			result.message = "用户名或者密码错误，请重新输入";
		} else {
			req.session.username = req.body.username;
		}
		res.send(JSON.stringify(result));
	})
})

router.get('/find', (req, res) => {
  // 通过模型去查找数据库

  UserModel.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


router.get('/session', (req, res) => {

  if (!req.session) {
    res.send("err");
  } else {
    res.send(req.session.username);
  }
});


module.exports = router;
