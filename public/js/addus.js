(function(){
    $(function(){
    	/*阻止默认事件*/
        // document.body.addEventListener("touchstart", function(event) {
        //     event.preventDefault();
        // },false);
        document.body.addEventListener("touchmove", function(event) {
            event.preventDefault();
        },false);

    	var scrollHeight = document.documentElement.clientHeight + 'px';
        $('#addus').css({'height':scrollHeight});
    	var news_scroll1 = new IScroll('#addus', {freeScroll: true, checkDOMChanges: true });
    	/****
    	*日期
    	****/
        $(".birthday .inputText").on("tap",function(){
        		$(".brithinput").show();  
        		$(".shade").show();  
        		$(".brithinput").css({bottom:'-205px'});  
        		$(".day").val("");
        		$(".year").val("");
        		$(".mouth").val("");
        		$(".num").css("background","#fff");  
                $(".day,.mouth,.year").css("background","");

        })

        var nowInput = "day";
       

        $(".day,.mouth,.year").on("tap",function(){
            $(this).css("background","#FFFFE0");
            $(this).siblings().css("background","");

            if($(".brithinput").css("bottom")=="-205px"){
                $(".brithinput").animate({bottom:'0px'},200);  
            }

            if($(this).hasClass("day")){
                nowInput = "day";
                
            }else if($(this).hasClass("mouth")){
                nowInput = "mouth";
                
            }else if($(this).hasClass("year")){
                nowInput = "year";
                
            }

        })

        $(".num").on("tap",function(){
        	$(this).animate({background:'#ccc'},50);  
        	$(this).siblings().animate({background:'#fff'},50);
        	var index = $(this).attr("index");

        	if(!!isNaN(index)){
        		var val = $("."+nowInput).val();
        		var newval = val.substring(0,(val.length-1));
        		$("."+nowInput).val(newval);
        		// if(newval.length==0){
        		// 	if($("."+nowInput).hasClass("day")){
        		// 		$("."+nowInput).text("日");
        		// 	}else if($("."+nowInput).hasClass("mouth")){
        		// 		$("."+nowInput).text("月");
        		// 	}else if($("."+nowInput).hasClass("year")){
        		// 		$("."+nowInput).text("年");
        		// 	}

        		// }
        		return;
        	}
        	if(index.length>0&&!isNaN(index)){
        		if($("."+nowInput).hasClass("day")){
	        		if($("."+nowInput).val().length<2){
	        			$("."+nowInput).val($("."+nowInput).val()+index);
	        		}
	        		if(!/^[0-9]*$/g.test($("."+nowInput).val())){
	        			$("."+nowInput).val(index);
	        		}

	        	}else if($("."+nowInput).hasClass("mouth")){
	        		if($("."+nowInput).val().length<2){
	        			$("."+nowInput).val($("."+nowInput).val()+index);
	        		}
	        		if(!/^[0-9]*$/g.test($("."+nowInput).val())){
	        			$("."+nowInput).val(index);
	        		}
	        	}else if($("."+nowInput).hasClass("year")){
	        		if($("."+nowInput).val().length<4){
	        			$("."+nowInput).val($("."+nowInput).val()+index);
	        		}
	        		if(!/^[0-9]*$/g.test($("."+nowInput).val())){
	        			$("."+nowInput).val(index);
	        		}
	        	}
        		
        	}
        })


        $(".ok").on("tap",function(){
        	var day = $(".day").val();
        	var mouth = $(".mouth").val();
        	var year = $(".year").val();
        	if(!/^[0-9]*$/g.test(day)||!/^[0-9]*$/g.test(mouth)||!/^[0-9]*$/g.test(year)||day==""||mouth==""||year==""){
        		return;
        	}
        	$(".birthday .content").text(year+"-"+mouth+"-"+day);
        	$(".brithinput").hide();  
        	$(".shade").hide(); 
        })

        $(".cancel").on("tap",function(){
        	$(".brithinput").hide();  
        	$(".shade").hide();  
        })


        /****
    	*选择
    	****/
        
        var news_scroll = new IScroll('#list', {freeScroll: true, checkDOMChanges: true });
        var selectVal = "";
        var obj = "";
        
       	$(".job .inputText").on("tap",function(){
        	var data = ["主任医师","副主任医师","主任医师","主任医师","主任医师"];
       		public_select(data);
       		$(".select").show();
	        $(".shade").show();
	        news_scroll.refresh();
	        obj = $(".job .inputText");
        })

		$(".type .inputText").on("tap",function(){
        	var data = ["测试1","测试2","测试3","测试4","测试5"];
       		public_select(data);
       		$(".select").show();
	        $(".shade").show();
	        news_scroll.refresh();
	        obj = $(".type .inputText");
        })

        $(".list .option").live("tap",function(){
        	$(this).css("background","url(imgs/ok.png) no-repeat center right");
        	$(this).css("background-size","20px 16px");
        	$(this).siblings().css("background","");
        	selectVal = $(this).text();
        })
       	$(".selectok").on("tap",function(){
        	obj.find(".content").text(selectVal);
        	$(".select").hide();
        	$(".shade").hide();  
        })
        function public_select(data){
        	var html = "";
        	for(var i=0;i<data.length;i++){
        		html+='<div class="option">'+data[i]+'</div>';
        	}
        	$("#select").html(html);


        	$(".selectok").on("tap",function(){
	        	obj.find(".content").text(selectVal);
	        	$(".select").hide();
	        	$(".shade").hide();  
	        })
	        
        }

        $(".selectcancel").live("tap",function(){
        	$(".select").hide();  
        	$(".shade").hide();  
        })

    })
})();








