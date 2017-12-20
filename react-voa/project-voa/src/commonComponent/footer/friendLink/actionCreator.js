// import { ADD } from "./actionType.js"

// export default getList=(value)=>({
//        type:ADD,
//        value:value
// })


import { ADD } from './actionType';

export const getList = (value) => ({
	 type: ADD,
	 value: value,
	 key: Date.now().toString()
})

