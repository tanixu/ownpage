(function($,w){
	// $.post("./get",{},function(data){

	// 	$(".about-content.content-0").text(data[0].articleContent);
	// },"json");
	var own = {
		init : function(){
			this.tab();
			this.works();
		},
		tab :function(){
			var _tab = $(".about-tab");
			var lis = _tab.find("li");
			for (var i = 0; i < lis.length - 1 ; i++) {
				lis.eq(i).mouseenter(function(){
					var id = $(this).attr('data-id');
					$('.about-tab .current').removeClass('current');
					$(this).addClass('current');
					$('.about-content.current').removeClass('current');
					$('.about-content').eq(id).addClass('current');
				});
			};
		},
		works :function(){
			$(".work-item").on("mouseenter",function(){
				$(this).find(".work-cover").css({"z-index" : "10"}).animate({
					"left" : "0px"
				});
			});
			$(".work-item").on("mouseleave",function(){
				$(this).find(".work-cover").animate({
					"left" : "-300px"
				});
			});
		}
	}
	own.init();
}(jQuery,window))