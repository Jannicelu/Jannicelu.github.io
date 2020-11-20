window.onload = function () {
	var allGroupEm = document.getElementsByClassName('group1');
	var groupEm = allGroupEm[0];
	console.log(groupEm.innerHTML);
	groupEm.innerHTML = 'Content changed!';
	var idEm = document.getElementById('no6');
	idEm.innerHTML = 'no6 changed!';
	idEm.style.color = 'red';
};