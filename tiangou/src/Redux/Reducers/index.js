const listreducer = (state=[],action)=>{
	let {type,payload} =action;
	switch(action.type){
		case "ALL":
			var newS = [...state];
			var newArray = action.payload;
			for(var i = 0; i< newArray.length;i++){
				newS.push(newArray[i]);
			}
			return newS;
		default :
			return state;
	}
}




export default listreducer;

// reducer 的设计必须是一个纯函数
// 
// 只要每次给定相同的输入值，就一定会得到相同的输出值: 例如传入1与2，就一定会得到3
// 不会改变原始输入参数，或是外部的环境，所以没有副作用
// 不依頼其他外部的状态，变量或常量
