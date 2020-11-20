var name='Jia Zhen';
var age = 23;
var affiliation = '';

var profile = {
	name: 'Jia Zhen',
	age: 23,
	affiliation: 'NTHU',
	height: 159,
	Weight: 47,
	/*homePhone: 492633811
	mobilephone: [95543213, 893365442, 123456780]*/ /*It isn't good.*/ 
	contact: {
		home: 492633811,
		mobile:[95543213, 893365442, 123456780]
	}
};

console.log(profile.name);
console.log(profile['name']);

profile.gender = 'female';

console.log(profile.gender);

console.log(profile.contact.mobile[1]);

console.log(name.length);

console.log(profile.contact.mobile.length);
                                         