
$(function (){



	//搜索框动画
	var Input = $('#search form input');
	Input.focusin(function (){
		$('.search-btn').css({
			"background":"#333",
			"color":"#fff"
		});
		Input.animate({width:200});
	})

	Input.focusout(function (){
		$('.search-btn').css({
			"background":"",
			"color":"#333"
		});
		Input.animate({width:100});
	})




	
	//轮播初始化
	var n = 130;  //小图高度
	var a = 0;    //大图处于第几张
	var zIdex = 1;//图片优先级
	var allBigLi = $('#big-pic li').length;

	$('#slider').mouseover(function (){
		$('#prev').css("display","block");
		$('#next').css("display","block");
	})
	$('#slider').mouseout(function (){
		$('#prev').css("display","none");
		$('#next').css("display","none");
	})





	$('#big-pic li img').eq(0).css("z-index",2);	
	$('#next').click(function (){
		var sTop = $('#small-pic').position().top;
		if(sTop > -650){
			if(! $('#small-pic').is(":animated") ){
				$('#small-pic').animate({top:sTop-n});
				
			}
		}
		
		// 大图下一张
		if(a<6){
			a++;
			zIdex++;
			$('#big-pic li img').css("opacity",0);
			$('#big-pic li img').eq(a).animate({opacity:1});
			$('#big-pic li img').eq(a).css("z-index",zIdex);
			console.log(a);

		}
		
		



	});

	$('#prev').click(function (){
		var sTop = $('#small-pic').position().top;
		console.log(sTop);
		if(sTop < 0){
			if(! $('#small-pic').is(":animated") ){
				$('#small-pic').animate({top:sTop+n});
				
			}		
		}


		//大图上一张
		
		if(a>0){
			a--;
			zIdex++;
			$('#big-pic li img').css("opacity",0);
			$('#big-pic li img').eq(a).animate({opacity:1});
			$('#big-pic li img').eq(a).css("z-index",zIdex);
			console.log(a);
		}
	});


})


