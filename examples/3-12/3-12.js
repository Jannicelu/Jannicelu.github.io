function mouseEventMsg (){
	alert('Mouse event!');
};


window.onload = function() {
	var em = document.querySelector('body');
	em.addEventListener('click', function() {
		alert('Clicked');
	});
	em.addEventListener('mouseevent', mouseEventMsg);
	em.addEventListener('mouseleave', mouseEventMsg);
	em.removeEventlister('mouseleave');

};