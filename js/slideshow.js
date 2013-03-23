var t=setInterval(function(){$("#right").click()},10000);
	
	
	$(document).ready(function()
	{
		var present=1;
		var next=2;
		var total_slide=document.getElementById("slider").childElementCount;
		
		$("#right").click(function()
		{
			
			present_slide="#slide"+present;
			next_slide="#slide"+next;
			$(present_slide).css("top","200px");
			$(next_slide).css("top","0px");
			present++;
			next++;
			if(present==(total_slide+1))
			{
				present=1;
				next=2;
				for(i=1;i<=total_slide;i++)
				{
					$("#slide"+i).css("top","200px");
				}
				$("#slide1").css("top","0px");
			}
			
		});
		
		$("#left").click(function()
		{
			if(present==1)
			{
			next_slide="#slide"+total_slide;
			present_slide="#slide"+present;
			$(present_slide).css("top","200px");
			$(next_slide).css("top","0px");
			
			present=total_slide;
			next=1;
			}else
			{
			next_slide="#slide"+(present-1);
			present_slide="#slide"+present;
			$(present_slide).css("top","200px");
			$(next_slide).css("top","0px");
			present--;
			next--;
			}
			if(next==0)
			{
				present=(total_slide-1);
				next=total_slide;
	
			}
		});
	});
