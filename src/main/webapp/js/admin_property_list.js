$(function(){
	
	

	
	//初始化查询所有属性
	//var cid=location.href.substr(location.href.indexOf("=")+1);	
	var cid=1;
	var pagenum=1;
	var pagesize=5;
	getProperty();
	
	//查询所有记录数
	$.ajax({
		type:"post",
		url:"getRecords/"+pagesize+"/"+cid,
		data:{},
		dataType:"json",
		success:function(msg){			
			console.log(msg);			
			$("#pagesum").val(msg);
			//分页123的隐藏
			if(msg<3){
				$("#three").parent().hide();
			}
			if(msg<2){
				$("#two").parent().hide();
			}

		}
	});
	
	
	
	
	
	//分页查询
	function getProperty(){
		$.ajax({
			type:"post",
			url:"getPropertyByCategory/"+cid+"/"+pagenum+"/"+pagesize,
			data:{},
			dataType:"json",
			success:function(msg){
				console.log(msg);
				$("#tbody").empty();
				for(var i=0;i<msg.length;i++){
					$("#tbody").append("<tr class='row mx-0'>"+
			        "<td class='col-2'>"+msg[i].id+"</td>"+
			        "<td class='col-6'>"+msg[i].name+"</td>"+
			        "<td class='col-2'><img src='img/icon/brush_16px_562342_easyicon.net.png' data-id='"+msg[i].id+"' data-name='"+msg[i].name+"' class='edit'/></td> "+
			        "<td class='col-2'><img src='img/icon/bin_16px_562337_easyicon.net.png'  data-id='"+msg[i].id+"' class='bin' /></td></tr>"
			        )
				}
				
			}
				
		});
	}
	
	$("#one,#start").click(function(){
		pagenum=1;		
		getProperty();
		$("#one,#start").parent().parent().children().attr("class","page-item");
		$("#one,#start,#last").parent().attr("class","page-item disabled");
	})
	
	$("#two").click(function(){
		pagenum=2;		
		getProperty();
		$("#two").parent().parent().children().attr("class","page-item");
		$("#two").parent().attr("class","page-item disabled");
	})
	
	$("#three").click(function(){
		pagenum=3;		
		getProperty();
		$("#three").parent().parent().children().attr("class","page-item");
		$("#three").parent().attr("class","page-item disabled");
	})
	//上一页
	$("#last").click(function(){
		if(pagenum>1){
			pagenum=pagenum-1;
			getProperty();
			$("#last").parent().parent().children().attr("class","page-item");
		}

	})
	//下一页
	$("#next").click(function(){
		console.log("pagesum:"+$("#pagesum").val());		
		if(pagenum<$("#pagesum").val()){
			pagenum=pagenum+1;
			getProperty();
			$("#next").parent().parent().children().attr("class","page-item");
		}
				
	})
	//末页
	$("#final").click(function(){
		pagenum=$("#pagesum").val();
		getProperty();
		$("#final").parent().parent().children().attr("class","page-item");
		$("#final,#next").parent().attr("class","page-item disabled");
	})
	
	//增加属性
	$("#button").click(function(){
		if($("#propertyName").val()==""){
			alert("请输入属性名");
		}else{
			//判断属性名是否重复
			$.ajax({
				type:"post",
				url:"selectPropertyByIdName/"+$("#propertyName").val()+"/"+cid,
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
							url:"savePropertyById/"+$("#propertyName").val()+"/"+cid,
							data:{},
							dataType:"json",
							success:function(msg){
								console.log("savePropertyById："+msg);
								alert(msg.result);
								location.reload();
							}
						});
					}
				}
			});
			
			
		}
	})
	
	//点击垃圾桶删除，页面后追加元素事件绑定
	$(document).on("click",".bin",function(){
		var id=$(this).attr("data-id");
		$.ajax({
			type:"post",
			url:"deletePropertyById/"+id,
			data:{},
			dataType:"json",
			success:function(msg){
				console.log("deletePropertyById："+msg);
				alert(msg.result);
				location.reload();
			}
		});
		
	})
	
	//点击图片进入编辑页面，页面后追加元素事件绑定
	$(document).on("click",".edit",function(){
		//var name=$(this).attr("data-name");
		var id=$(this).attr("data-id");
		location.href="admin_property_edit.html?id="+id;
		
	})
	
	
	
	
	
	
	
})