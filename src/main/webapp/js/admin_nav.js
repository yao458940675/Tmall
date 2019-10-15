$(function(){
	$("#nav1 #nav2 #nav3").attr("class","nav-item");
	$("#nav1").click(function(){
		location.href="admin_category_list.html";
	})
	$("#nav2").click(function(){
		$("#nav1 #nav2 #nav3").attr("class","nav-item");
		location.href="admin_user_list.html";
	})
	$("#nav3").click(function(){
		$("#nav1").attr("class","nav-item");
		location.href="admin_order_list.html";
	})
	
})