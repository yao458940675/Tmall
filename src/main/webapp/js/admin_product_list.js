$(function(){
	var pagenum=1;

	function selectAllUser(){
		$.ajax({
			type:"post",
			url:"getAllProduct/"+pagenum,
			data:{},
			dataType:"json",
			success:function(res){
				$("tbody").empty();
				
				for(i in res){
					//console.log(res[i].id+","+res[i].pro.id);
					$("tbody").append("<tr><td>"+res[i].id+"</td>" +
							"<td><img width='40px' src='img/chanpin/"+res[i].pro.id+".jpg'></td>" +
							"<td>"+res[i].name+"</td>" +
							"<td>"+res[i].subTitle+"</td><td>"+res[i].originalPrice+"</td><td>"+res[i].promotePrice+"</td>" +
							"<td>"+res[i].stock+"</td>" +
							"<td><a href='#?pid="+res[i].id+"'><span class='glyphicon glyphicon-picture'></span></a></td>" +
							"<td><a href='#?pid="+res[i].id+"'>" +
							"<span class='glyphicon glyphicon-th-list'></span></a></td>" +
							"<td><a href='#?pid="+res[i].id+"'><span class='glyphicon glyphicon-edit'></span></a></td>" +
							"<td><a deleteLink='true' href='#?pid="+res[i].id+"'><span class='glyphicon glyphicon-trash'></span></a></td></tr>");
					
							
				
				}
				
			}
		})
	}
	selectAllUser();
	

	var arr=$(".page-link");

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

	})
	
	
	
})