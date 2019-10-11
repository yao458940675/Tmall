$(function(){
	
	

	
	//初始化查询所有属性
	//var cid=location.href.substring(location.href.indexOf("="));	
	var cid=2;
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
			if(msg<3){
				$("#three").parent().hide();
			}
			if(msg<2){
				$("#two").parent().hide();
			}

		}
	});
	
	//分页123的隐藏
	
	
	
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
			        "<td class='col-2'><img src='img/icon/brush_16px_562342_easyicon.net.png'/></td>"+
			        "<td class='col-2'><img src='img/icon/bin_16px_562337_easyicon.net.png'/></td></tr>"
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
	
	
	
	
	
	
	
	
	
	
	
	
	
})