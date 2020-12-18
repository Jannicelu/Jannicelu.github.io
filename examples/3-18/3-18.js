window.onload =function() {
	var profile = {
		name: 'Lu Jia-Zhen',
		age: 23,
		height: 159
	};
	for(var key in profile) {
		console.log(key);
		console.log(profile[key]);
		console.log(profile.key);//doesn't work.!
	}
};