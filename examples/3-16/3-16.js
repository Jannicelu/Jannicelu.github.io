function changeAllBgs (){
	var targets = document.gtElementsByTagName('div');
	for(var index = 0 ; index<targets.length ; index++) {
		var div = targets[index];
		if(div.id !== 'noChange'){
			div.style.backgroundColor = 'green';
		}
	}
}





window.onload = function(){
	//loop variable; loop condition; loop action; counter ++ -> counter = counter +1
	/*for(var counter = 1 ; counter <= 10 ; counter ++) {
			console.log(counter);

	}*/

	//Infinit loop !!! dangerous !!!
	/*for(var vounter = 1 ; counter <= 10 ; counter --){
		console.log(counter);
	}*/
	//infinite loop !!! Dangerous!!!
	/*var counterB = 100;
	for(var counter = 1 ; counter <= 10 ; counterB ++){

	}*/
	var button = document.getElementById('chamgeAll');
	button.addEventListener('click',changeAllBgs);
};