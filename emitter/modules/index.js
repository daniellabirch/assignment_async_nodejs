function Emitter(){
	var eventCollection={};
	this.on=function(eventType, callback){
				eventCollection.eventType=callback;
			};
	
	this.removeListener=function(eventType,callback){
							eventCollection.eventType=undefined;
						};
	
	this.removeAllListeners=function(eventType){
								eventCollection={}
						};
}