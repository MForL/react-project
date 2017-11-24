export default function(state=[], action){
	switch(action.type){
		case "ADD_TODO":
			var newS = [...state];
			newS.push(action.payload);
			return newS;
		default:
			return state;
	}
}