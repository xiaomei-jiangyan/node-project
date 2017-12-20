const UserModel = require("../model/user.js");
const crypto = require('crypto');

const register = (req,res) => {
	// 控制器负责业务逻辑，获取外部传入的name和password
	const {name,password} = req.body;

	
	
	// 从数据库里取对应名字的用户是否存在，取数据成功后做成功回调
	UserModel.findOneUser({name}, (result) => {
		if(result.length > 0){
			res.json({
				ret: true,
				data: false
			})
		}else{
		const hash = crypto.createHash('sha256');
		hash.update(password);

		UserModel.saveUser({
				name,
				password: hash.digest('hex')
		}, () => {
			res.json({
				ret: true,
				data: true
			})
		
		})
		}

	})
}
const login = (req,res) => {
	// 控制器负责业务逻辑，获取外部传入的name和password
	const {name,password} = req.body;

	const hash = crypto.createHash('sha256');
	hash.update(password);
	
	// 从数据库里取对应名字的用户是否存在，取数据成功后做成功回调
	UserModel.findOneUser({
		name,
		password: hash.digest('hex')
	}, (result) => {
		if(result.length > 0){
			req.session.login = true;
			req.session.username = name;
			res.json({
				ret: true,
				data: {
					login:true
				}
			})
		}else{
			res.json({
				ret: true,
				data: {
					login:false
				}
			})

		}

	})
} 


const isLogin = (req,res) => {
	if(req.session.login){
		res.json({
			ret:true,
			data:{
				login:true,
				username:req.session.username
			}
		})
	}else{
		res.json({
			ret:true,
			data:{
				login:false
			}
		})
	}
} 

const logout = (req,res) => {
	req.session.login = null
	res.json({
		ret:true,
		data:{
			logout:true
		}
	})
	
} 

module.exports = {
	register,
	login,
	isLogin,
	logout
}
	
// 调用model层，传入三个参数分别是
// 存储的用户信息
// 存储成功的回调，指的是数据层存储成功，我逻辑层应该干什么
// 存储失败的回调，指的是数据层存储失败，我逻辑层应该干什么