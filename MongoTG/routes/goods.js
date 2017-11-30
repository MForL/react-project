var express = require('express');
var router = express.Router();
var GoodModel = require("../model/GoodModel");

/* GET home page. */
router.get('/shop', function(req, res, next) {
    if (!req.session.username) {
        var logDefeat = "请您先登录！再查看购物车";

    	res.send(JSON.stringify(logDefeat));
        return;
    };
    GoodModel.find({ flag: 1, username: req.session.username }, (err, docs) => {
        if (err || docs.length == 0) {
	      res.send(err);
	    } else {
	      res.send(docs);
	    }
    })
});
// --------------增	
router.post('/create', function(req, res, next) {
    var goodN = new GoodModel();
    goodN.username = req.session.username,
    goodN.imgUrl = req.body.imgUrl;
    goodN.goodname = req.body.goodname;
    goodN.price = req.body.price;
    goodN.count = req.body.count;

    goodN.save((err) => {
        if (err) {
            res.send("商品保存失败");
        } else {
            res.send("商品保存成功");
        }
    });
});


router.post('/save', function(req, res, next) {
    GoodModel.update({ _id: req.body.id }, {
            count: req.body.count
        },
        (err, b) => {
            var result = {
                code: 1
            }
            if (err) {
                result.code = -109;
                result.message = "更改失败!";
            }
            res.send(JSON.stringify(result));
        })

});

// ----------------------改
// router.get('/edit', function(req, res, next) {
// 	GoodModel.find({_id: req.query.id}, (err, docs)=>{
// 		if(err || docs.length == 0) {
// 			res.send("work不存在");
// 			return;
// 		}else{
// 			res.render('work', {data: docs[0], id: req.query.id});
// 		}

// 	});
// });




// ---------------------删
router.post('/del', function(req, res, next) {
    GoodModel.findById(req.body.id, function(err, post) {
        if (!err) {
            post.flag = 0;
            post.save((err) => {
                var result = {
                    code: 1
                }
                if (err) {
                    result.code = -109;
                    result.message = "删除失败!";
                }
                res.send(JSON.stringify(result));
            });
        }
    });

});

router.get('/find', (req, res) => {
  // 通过模型去查找数据库

  GoodModel.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


module.exports = router;