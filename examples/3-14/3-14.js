function resetBg (){
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'red';
	var em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
	var em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
	var em = document.getElementById('item4');
	em.style.backgroundColor = 'red';
}


function changeBg (){
	resetBg();
	//var emId = this.id;
	//var em = document.getElementById(emId);
	//em.style.backgroundColor = 'blue';
	this.style.backgroundColor = 'blue'; 
}


window.onload = function(){
	var em = document.getElementById('item1');
	em.addEventListener('click',changeBg);
	var em = document.getElementById('item2');
	em.addEventListener('click',changeBg);
	var em = document.getElementById('item3');
	em.addEventListener('click',changeBg);
	var em = document.getElementById('item4');
	em.addEventListener('click',changeBg);
}