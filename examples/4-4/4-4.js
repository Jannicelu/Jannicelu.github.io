$(document).ready(function(){
	$('body>button:first-of-type').on('click',function(){
		$('body>div').addClass('selected');
		
	});
	$('body>button:last-of-type').on('click', function(){
		$('body>div').removeClass('selected');
	})
});






//這個方式相較於4-3，是用在如果有很多個div都要做同樣的事情時，程式碼相對比較短
//first-of-type