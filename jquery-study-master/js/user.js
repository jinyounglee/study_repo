// jquery는 캐시를 한다  ==  한번 물고 있으면 계속 물고있는다.
// 
// this.$el = $('.container')  // 해놓으면 
// this.$el.find   호출 할때마다 물고있는 놈을 사용 한다.
// 함수는 한가지 기능만 가질수 있도록 하는게 좋다 

$(function(){
	// js실행시 바로 실행될 영역
	user.init();
});

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


	// 입력창에 빈칸은 없는가?
	// 빈칸이 있으면 해당 입력칸에 강조효과 (empty 클래스 추가 )주기
	// 저장 실패 alert
	// 2. password 와 passwordConfirm이 같은가? 다르면 패스워드 확인 all
	// 3. 이미 등록되 사용자가 아닌가?
	// 4. 위 검증이 끝나면 회원 가입 
		if( email == null ){
			alert('email 을 입력하세요 ');
			this.$el.find('#inputEmail').val('').focus().addClass("empty");
		} else if ( password  == null ){
			alert('password를 입력하세요 ');
			this.$el.find('#inputPassword').addClass("empty").val('').focus();
		} else if ( passwordConfirm  == null ){
			alert('password를 입력하세요 ');
			this.$el.find('#inputPasswordConfirm').val('').focus().addClass("empty");
		} else if ( name  == null ){
			alert('이름을 입력하세요 ');
			this.$el.find('#inputName').val('').focus().addClass("empty");
		} else if ( name == null ){
			alert('직업을 입력하세요 ');
			this.$el.find('#inputJob').val('').focus().addClass("empty");
		} else if( password != passwordConfirm ){
			alert("비밀번호확인이 맞지 않습니다 다시 입력해주세요 ");
			password.val('').focus().addClass("empty");
		}	

	}
}