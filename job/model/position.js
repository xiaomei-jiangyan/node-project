const mongoose = require("../utils/database.js");

const Position = mongoose.model('position', {
	 position: String, 
	 salary : String,
	 company : String,
	 logo: String
});

const savePosition = (positionInfo,succCb) => {
	const position = new Position(positionInfo);
	position.save().then( () => {
		succCb();
	})
}

const deleteItem = (id,succCb) => {
	Position.findByIdAndRemove(id).then( (result) => {
		succCb(result);
	})
}

const findAll = (succCb) => {
	Position.find({}).then( (result) => {
		succCb(result);
	})
}

const findPageList = (listInfo,succCb) => {
	const {count, page}= listInfo;

	Position.find({}).limit(parseInt(count,10)).skip((page-1)*count).then( (result) => {
		succCb(result);
	})
}

module.exports = {
	savePosition,
	findAll,
	findPageList,
	deleteItem
}