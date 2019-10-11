$(function(){
	var id=location.href.substr(location.href.indexOf("=")+1);
	console.log(id);
	
	$.ajax({
		type:"post",
		url:"selectPropertyName/"+id,
		data:{},
		dataType:"json",
		success:function(msg){
			console.log(msg.name);
			$("#propertyName").val(msg.name);
			$("#propertyCid").val(msg.cid);
			$("#propertyList").attr("href","admin_property_list.html?cid="+$("#propertyCid").val());
		}
				
	});
	
	$("#button").click(function(){
		if($("#propertyName").val()==""){
			alert("请输入属性名");
		}else{
			//判断属性名是否重复
			$.ajax({
				type:"post",
				url:"selectPropertyByIdName/"+$("#propertyName").val()+"/"+$("#propertyCid").val(),
				data:{},
				dataType:"json",
				success:function(msg){
					console.log("是否重复："+msg);
					if(msg==1){
						alert("属性名重复");
						$("#propertyName").val("").focus();
					}else{
						//属性名不重复时增加属性并刷新页面
						$.ajax({
							type:"post",
							url:"updatePropertyById/"+$("#propertyName").val()+"/"+id,
							data:{},
							dataType:"json",
							success:function(msg){
								console.log("updatePropertyById："+msg);
								alert(msg.result);
								//location.reload();
							}
						});
					}
				}
			});
			
			
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})