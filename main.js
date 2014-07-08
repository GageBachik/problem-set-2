function palindrome(str){
	var foward = str.toLowerCase();
	var backward = foward.split('').reverse().join('');

	if (foward === backward) {
		return true;
	}else{
		return false;
	}
}

function dashInsert(num){
	var nums = num.split('')
	var dashed = nums.map(function(value, index){
		if (value % 2 === 1 && nums[index+1] % 2 === 1) {
			var dashed = value + '-';
			return dashed;
		}else{
			return value;
		}
	});
	return dashed.join('');
}

function caesarCipher(str, shift){
	var base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	var punc = '`~!@#$%^&*()_+|}{[]\\-0987654321<>?O\"\'o/., '.split('');
	var cipher = str.split('');

	var sovled = cipher.map(function(value){
		if (punc.indexOf(value) !== -1){
			return value;
		}else{
			if(shift > 26) shift = shift % 26;
			return base[base.indexOf(value)+shift];
		}
	});

	return sovled.join('');
}