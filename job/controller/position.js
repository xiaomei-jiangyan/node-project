const PositionModel = require("../model/position.js");

const add = (req,res) => {
	//get方式获取的数据使用req.query,post获取的数据使用req.body
	const {position,salary,company} = req.body;
	const logo = req.file.filename;
	PositionModel.savePosition({
		salary,position,company,logo
	},() => {
		res.json({
			ret: true,
			data:true
		})
	})
}

const deleteItem = (req,res) => {
	const {id} = req.query;
	PositionModel.deleteItem(id, () => {
		res.json({
			ret: true,
			data: true
		})
	})
}


const getList = (req,res) => {
	let totalPage = 1;
	const {page,count} = req.query;
	PositionModel.findAll( (results) => {
		totalPage = Math.ceil(results.length/count);
		PositionModel.findPageList({page,count},(results) => {
			res.json({
				ret:true,
				data:{
					list:results,
					total: totalPage
				}
			})
		})
	})
}



module.exports = {
	add,
	getList,
	deleteItem
}