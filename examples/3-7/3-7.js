//actionCompleted(); 

function actionCompleted () {
	alert('Completed');
}

//actionCompleted();

var actionCompletedAgain = function () {
	alert('Complete Again!');

}

//actionCompletedAgain();

function popupMsg (msg) {
	var finalMsg = 'Site message' +msg;
	alert(finalMsg);
}

//popupMsg('test');
//popupMsg('Warning');

function userMsg (name,msg = 'nothing') {
	var finalMsg= name +'says:' +msg;
	alert(finalMsg);	
}

//userMsg('Victor', 'surprise!');
//userMsg ('Victor');

function complexCalc (x,y) {
	var result = 0; /*初始值*/
	result = x*y;
	result = result/(x-y);
	result = result* y - x; 
	return result;
}

//var finalResult = complexCalc(5, 10);
//alert(finalResult);

var demoFuncs = {
	popupMsgFuc: popupMsg,
	userMsgFunc: userMsg,
	complexCalcFunc: complexCalc
	directFunc: function(){
		
	}
};

demoFuncs.userMsgFunc('Victor', 'I am calling a function in an object.')