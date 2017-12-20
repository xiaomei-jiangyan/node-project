// 引入数据库连接
const mongoose = require("../utils/database.js");
// 如果没有users表，创建一张users表，如果有，直接使用uses表
const User = mongoose.model('user', {
 name: String, 
 password : String
});

// 向表里存数据，如果存成功了调用succCb方法，如果失败了用errCb方法
const saveUser = (userInfo,succCb) => {
	const user = new User(userInfo);
	user.save().then( () => {
		succCb();
	});
}

const findOneUser = (userInfo,succCb) => {
	User.find(userInfo).then((result) => {
		succCb(result);
	})
}

module.exports = {
	saveUser,
	findOneUser
}