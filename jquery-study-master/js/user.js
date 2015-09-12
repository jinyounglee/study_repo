// jquery는 캐시를 한다  ==  한번 물고 있으면 계속 물고있는다.
// 
// this.$el = $('.container')  // 해놓으면 
// this.$el.find   호출 할때마다 물고있는 놈을 사용 한다.
// 함수는 한가지 기능만 가질수 있도록 하는게 좋다 

$(function(){
	// js실행시 바로 실행될 영역
	user.init();
});

// db연동시 사라짐
var users = [];
var currentTime = new Date();
// 굳이 변수에 담아서 메모리 할당 할 필요가 없다. 

var users = [
	{
		email : '1',
		password : '2',
		name : '1',
		job : '1',
		joinDate : currentTime,
		updateDate : currentTime
	},
	{
		email : '2',
		password : '2',
		name : '2',
		job : '2',
		joinDate : currentTime,
		updateDate : currentTime
}];


var user = {
	$el : {},

	init : function(){
		this.$el = $('.container');
		this.$el.find('#btnSignUp').click(function(){
			user.showModal();
		});
		this.$el.find('#btnClose').click(function(){
			user.closeModal();
		});	
		this.$el.find('#btnSubmit').click(function(){
			user.signUp();
		});
	},
	showModal : function(){
		this.resetModal();
		this.$el.find('#userModal').modal();
		//this.$el.find('input').val('');
	},
	closeModal : function(){
		this.$el.find('#userModal').modal('hide');		
	},
	resetModal : function(){
		this.$el.find('.signForms').val('');
	},
	addClass : function(){
		this.$el.find('#memberModal input').addClass( "empty" );
	},
	removeClass : function(){
		this.$el.find('#memberModal input').removeClass("class", "empty");
	},
	signUp : function(){
		var email = this.$el.find('#inputEmail').val(),
		password = this.$el.find('#inputPassword').val(),
		passwordConfirm = this.$el.find('#passwordConfirm').val(),
		name = this.$el.find('#inputName').val(),
		job = this.$el.find('#inputJob').val();

		this.find(email);	

	// 입력창에 빈칸은 없는가?
	// 빈칸이 있으면 해당 입력칸에 강조효과 (empty 클래스 추가 )주기
	// 저장 실패 alert
	// 2. password 와 passwordConfirm이 같은가? 다르면 패스워드 확인 all
	// 3. 이미 등록되 사용자가 아닌가?
	// find 함수를 만들고 email이 중복인지 체크해서 
	// 4. 위 검증이 끝나면 회원 가입 


	},

	validate : function(){
		var $signForms = this.$el.find('.signForms'),
			result = true;

		$.each($signForms, function(index, signForm){
			var $signForm = $(signForm);

			if(!$signForm.val()){
				$signForm.addClass('empty');
				result = false;
			}else{
				$signForm.removeClass('empty');
			}
		});
		return result;
	},
/*
	find : function(email){
		for( var i=0; i< users.length; i++){
			if( email == users[i].email ){
				alert('중복된 사용자입니다.');
				return false;
			}
		}
	}*/

	find : function(email){
		$.each(users, function(index, value){
			var userTemp = value;
			if( userTemp.email === email ){
				result = true;
				return;
			}	
		});
		return result;
	}
}