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
	},
	showModal : function(){
		this.resetModal();
		this.$el.find('#userModal').modal();
		//this.$el.find('input').val('');
	},
	closeModal : function(){
		this.$el.find('#userModal').modal('hide');		
	}
	resetModal : function(){
		this.$el.find('.signForms').val('');
	}
}