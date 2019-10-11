$(function(){
	var pagenum=1;
	function selectAllUser(){
		$.ajax({
			type:"post",
			url:"selectAllUser/"+pagenum,
			data:{},
			dataType:"json",
			success:function(res){
				//console.log(res);
				$("#table_user").empty();
				for(user of res){
					$("#table_user").append("<tr><td>"+user.id+"</td><td>"+user.name+"</td></tr>");
					
					
				}
			//	$("#user_item li:lt(2)").attr("disabled","disabled");
				
			}
		})
	}
	selectAllUser();
	
//	console.log($(".page-link"));
	var arr=$(".page-link");
//	for(a of arr){
//		console.log(a);
//	}
	$(".page-link").click(function(event){
		
		if(!isNaN(event.target.innerText)){
			pagenum=event.target.innerText;
			selectAllUser();
			$("#hid").val(pagenum);
			//console.log($("#hid").val());
			for(a of arr){
				if(a.innerText==event.target.innerText){
					console.log(a);
					$(a).parent().attr("class","page-item active");
					console.log($(a).parent().attr("class"));
				}else{
					$(a).parent().attr("class","page-item");
				}
			}
			
		}else{
			pagenum=$("#hid").val();
			if(event.target.innerText==">"){
				
				pagenum=parseInt(pagenum)+1;
				
				if(pagenum>3){
					
					alert("mei");
					$("#hid").val(3);
					for(a of arr){
						if(a.innerText==$("#hid").val()){
							console.log(a);
							console.log($("#hid").val());
							
							$(a).parent().attr("class","page-item  active");
							
						}
					}
					
				}else{
					selectAllUser();
					$("#hid").val(pagenum);
				}
				for(a of arr){
					if(a.innerText==pagenum){
						console.log(a);
						$(a).parent().attr("class","page-item active");
					}else{
						$(a).parent().attr("class","page-item");
					}
				}
				
			}else if(event.target.innerText=="<"){
				pagenum=parseInt(pagenum)-1;
				
				if(pagenum==0){
					$("#hid").val(1);
					for(a of arr){
						if(a.innerText==$("#hid").val()){
							console.log(a);
							$(a).parent().attr("class","page-item active");
						}else{
							$(a).parent().attr("class","page-item");
						}
					}
					alert("mei");
					
					
					
				}else{
					selectAllUser();
					$("#hid").val(pagenum);
				}
				for(a of arr){
					if(a.innerText==pagenum){
						
						$(a).parent().attr("class","page-item active");
					}else{
						$(a).parent().attr("class","page-item");
					}
				}
			}
		}
		
		//console.log(pagenum);
//		$.ajax({
//			type:"post",
//			url:"selectAllUser/"+pagenum,
//			data:{},
//			dataType:"json",
//			success:function(res){
//				console.log(res);
//			}
//		})
	})
	
	
	
	
	
	
})