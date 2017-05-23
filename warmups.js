//1
var p = new Promise(function(resolve){
 setTimeout(function(){
  resolve("Hello Promise!");
 },1000);
});

p.then(function(message) {
  console.log(message);
});

//2
function delay(milliseconds){
	return new Promise(function(resolve){
		setTimeout(function(){
			if(milliseconds>0){
				resolve(milliseconds);
			}
		},milliseconds);
	})
}

function countDown(number){
	delay(number)
		.then(function(i){
			for(i=number;i>-1;i=i-100){
				if(i==0){
					console.log("Done!");
				}
				else{
					console.log(i)
				};
			};
		});
};

countDown(1000);

//3
var integers=[1,2,3,4,5,6,7,8,9]

function square(number){
	return new Promise(function(resolve,reject){
		if(isNaN(number)==true){
			reject(number+"is not a number");
		}
		else{
			resolve(number*number);
		}
	})
}

var promisesArray=integers.map(square);

Promise.all(promisesArray)
  .then(function(results) {
    console.log(results);
  });

//4
function doBadThing(forRealz){
	return new Promise(function(resolve,reject){
		if(forRealz==false){
			resolve("Yay");
		}
		else if(forRealz==true){
			reject("forRealz has been rejected");
		};
	});
};

doBadThing(true)
	.then(function(results) {
    	console.log(results);
  	})
	.catch(function(error) {
    	console.error(error);
  	});

doBadThing(false)
	.then(function(results) {
    	console.log(results);
  	})
	.catch(function(error) {
    	console.error(error);
  	});