const defaultState={
	list:[]
}

export default (state = defaultState, action) => {
  console.log(action.value);
  if(action.type === "add") {
     const newState=({
        list:action.value
     })
    
     return newState;
   }
 return state
}