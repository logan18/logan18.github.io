$(".piece").on("click",function(){
	var id=$(this).attr("data-id");
	$(id).attr("data-state","open");
	
	});
	
$(".close").on("click",function(){
	$(this).parent().attr("data-state","close");
	
	});