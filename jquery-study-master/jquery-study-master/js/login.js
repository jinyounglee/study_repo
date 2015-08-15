var myEmail = 'jojoldu@naver.com';
var myPassword = '1234';

//js 파일 로딩될때 바로 시작
$(function(){

    $('#btnLogin').click(checkEmailAndPassword);
	$('font').hide();
});

function show(){
    alert('안녕하세요');
}

function showEmail(){
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val('');
    alert(email);
}

function checkIdAndPw(){
	var $inputs = $('.inputs');
	var required = true;

	$.each($inputs, function(index, value){
		var $input = $($inputs[index]);

		//'', null, undefinded, 0, false
		if(!$input.val()){// not false === true
			required = false;
		}
	});

	if(!required){
		alert('값을 채워주세요');
	}else{
		alert('로그인!');
	}
}

function checkEmailAndPassword(){
	var cEmail = checkEmail(),
		cPassword = checkPassword(),
		cPasswordConfirm = checkPasswordConfirm();
		 
	if(cEmail && cPassword && cPasswordConfirm){
		window.location.href=window.location.href.replace('/login.html', '/member.html');
	}
}

function checkEmail(){
	var $inputEmail = $('#inputEmail');
	var $fontChild = $inputEmail.closest('p').find('font');

	//inputEmail is false
	if(!$inputEmail.val()){

		$fontChild.show();
		$inputEmail.addClass('empty');
		return false;
	}else{
		$fontChild.hide();
		$inputEmail.removeClass('empty');
	}
	return true;
}

function checkPassword(){
	var $inputPassword = $('#inputPassword');
	var $fontChild = $inputPassword.closest('p').find('font');

	//inputPassword is false
	if(!$inputPassword.val()){
		$fontChild.show();
		$inputPassword.addClass('empty');
		return false;
	}else{
		$fontChild.hide();
		$inputPassword.removeClass('empty');
		return true;
	}
}

function checkPasswordConfirm(){
	var $inputPassword = $('#inputPassword');
	var $inputPasswordConfirm = $('#inputPasswordConfirm');
	var $fontChilds = $inputPasswordConfirm.closest('p').find('font');

	if($inputPassword.val() !== $inputPasswordConfirm.val() ){
		$inputPassword.addClass('empty');
		$fontChilds.eq(1).show();
		return false;
	}else{
		$fontChilds.eq(1).hide();
		return true;
	}
	

}

