var express = require('express');
var router = express.Router();
const userController = require("../controller/user.js");
const posController = require("../controller/position.js");
const upload = require("../utils/imgUpload.js");
//app.js->路由->controller(业务逻辑)->model（数据存取）
// 路由匹配成功，逻辑开始执行，逻辑被拆分位MC两层
// 先执行业务逻辑，也就是先执行C层（控制器，业务逻辑）

//用户相关的路由 
router.post("/user/register",userController.register);
router.post("/user/login",userController.login);
router.get("/user/isLogin",userController.isLogin);
router.get("/user/logout",userController.logout);

// 职位相关的路由
router.post("/position/add",upload.single('logo'),posController.add);
router.get("/position/delete",posController.deleteItem);
router.get("/position/getList",posController.getList);

module.exports = router;
