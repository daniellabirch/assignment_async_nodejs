var Emitter = require('./emitter/modules/');
var emitter = new Emitter();

function callBack(event){
	console.log(event);
}

emitter.on(eventType, callBack(event));

//emitter.emit(eventType);

//emitter.removeListener(eventType, callback);

//emitter.removeAllListeners(eventType)