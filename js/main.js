$(".piece").on("click",function(){
	var id=$(this).attr("data-id");
	$(id).attr("data-state","open");
	
	});
	
$(".close").on("click",function(){
	$(this).parent().attr("data-state","close");
	
	});
	
var navTop = document.querySelector('.nav-toggle');
document.querySelector('.nav-btn').addEventListener('click', function (e) {
	e.preventDefault();
	if (navTop.getAttribute('data-state') == 'expanded') {
		navTop.setAttribute('data-state', 'collapsed');
		this.setAttribute('data-state', 'inactive');
	} else {
		navTop.setAttribute('data-state', 'expanded');
		this.setAttribute('data-state', 'active');
	}
});
