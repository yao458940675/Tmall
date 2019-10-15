$(function(){

	var pagesize=5;
	var pagenum=1;
	var cid=location.href.substr(location.href.indexOf("=")+1);
	//面包屑导航栏获得分类名称
	$.ajax({
		type:"post",
		url:"getCategoryById/"+cid,
		data:{},
		dataType:"text",
		success:function(msg){
			$("#cname").html(msg);
		}
	})
	getPageData();	
	function getPageData(){
		$.ajax({
			type:"post",
			url:"getAllProduct/"+pagesize+"/"+pagenum+"/"+cid,
			data:{},
			dataType:"json",
			success:function(res){
				console.log(res);                                                                                                                                                                                                                                   
				$("#tbody").empty();
				for(var i=0;i<res.length;i++){
					var image="无";
					if(res[i].pro[0]!=null){
						image="<img width='40px' src='img/chanpin/"+res[i].pro[0].id+".jpg'>";
					}
					$("tbody").append("<tr><td>"+res[i].id+"</td>" +
							"<td>"+image+"</td>" +
							"<td>"+res[i].name+"</td>" +
							"<td>"+res[i].subTitle+"</td><td>"+res[i].originalPrice+"</td><td>"+res[i].promotePrice+"</td>" +
							"<td>"+res[i].stock+"</td>" +
							"<td><a href='admin_product_image.html?cid="+cid+"/pid="+res[i].id+"'><span class='glyphicon glyphicon-picture'></span></a></td>" +
							"<td><a href='admin_product_editPropertyValue.html?cid="+cid+"/pid="+res[i].id+"'>" +
							"<span class='glyphicon glyphicon-th-list'></span></a></td>" +
							"<td><a href='admin_product_edit.html?cid="+cid+"/pid="+res[i].id+"'><span class='glyphicon glyphicon-edit'></span></a></td>" +
							"<td><a href='#?pid="+res[i].id+"' deleteLink='true' class='delete' data-id='"+res[i].id+"'><span class='glyphicon glyphicon-trash'></span></a></td></tr>");
					//href='#?pid="+res[i].id+"'
							
				
				}
				
			}
		});
	}
	
	
	//首页
	$("#start").click(function(){
		pagenum=1;
		$("#one").text(pagenum);
		$("#two").text(pagenum+1);
		$("#three").text(pagenum+2);
		getPageData();
		$("#start").parent().parent().children().attr("class","page-item");
		$("#start,#last").parent().attr("class","page-item disabled ");
		$("#one").parent().attr("class","page-item  active");
	})
	
	$("#one").click(function(){
		pagenum=$("#one").text();		
		getPageData();
		$("#one").parent().parent().children().attr("class","page-item");
		$("#one").parent().attr("class","page-item active ");
	})
	
	$("#two").click(function(){
		pagenum=$("#two").text();		
		getPageData();
		$("#two").parent().parent().children().attr("class","page-item");
		$("#two").parent().attr("class","page-item  active");
	})
	
	$("#three").click(function(){
		pagenum=$("#three").text();		
		getPageData();
		$("#three").parent().parent().children().attr("class","page-item");
		$("#three").parent().attr("class","page-item  active");
	})
	//上一页
	$("#last").click(function(){
		if(pagenum>1){
			pagenum=pagenum-1;
			getPageData();
			$("#last").parent().parent().children().attr("class","page-item");
			if(pagenum<parseInt($("#one").text())){
				$("#one").text(pagenum);
				$("#two").text(pagenum+1);
				$("#three").text(pagenum+2);
				$("#one").parent().attr("class","page-item  active");
			}else{
				if($("#two").text()==pagenum){
					$("#two").parent().attr("class","page-item  active");
				}else{
					$("#one").parent().attr("class","page-item  active");
				}
			}
			
		}

	})
	//下一页
	$("#next").click(function(){
		console.log("下一页======"+Math.ceil(($("#pagesum").val())/pagesize));
		if(pagenum<Math.ceil(($("#pagesum").val())/pagesize)){
			pagenum=parseInt(pagenum)+1;
			console.log("pagenum====="+pagenum);
			getPageData();
			$("#next").parent().parent().children().attr("class","page-item");
			if(pagenum>3){
				$("#three").text(pagenum);
				$("#two").text(pagenum-1);
				$("#one").text(pagenum-2);
				$("#three").parent().attr("class","page-item  active");
			}else{
				if($("#two").text()==pagenum){
					$("#two").parent().attr("class","page-item  active");
				}else{
					$("#three").parent().attr("class","page-item  active");
				}
			}
			
		}
				
	})
	//末页
	$("#final").click(function(){
		pagenum=Math.ceil(($("#pagesum").val())/pagesize);
		console.log("末页====="+pagenum);
		
		
		getPageData();
		
		$("#final").parent().parent().children().attr("class","page-item");
		$("#final,#next").parent().attr("class","page-item disabled");
		if(pagenum<2){
			$("#one").text(pagenum);
			$("#one").parent().attr("class","page-item  active");
			
		}else if(pagenum<3){
			$("#two").text(pagenum);
			$("#one").text(pagenum-1);
			$("#two").parent().attr("class","page-item  active");
		}else{
			$("#three").text(pagenum);
			$("#two").text(pagenum-1);
			$("#one").text(pagenum-2);
			$("#three").parent().attr("class","page-item  active");
		}
		
	})
	
	//添加产品
	var id = location.href.substr(location.href.indexOf('=')+1);
	$("#regBtn").click(function(){
		$.ajax({
			type:"post",
			url:"saveProduct/"+1,
			data:$("#form1").serialize(),
			dataType:"json",
			success:function(data){
				console.log(data);
				alert("产品添加成功");
				location.reload();
			}
		});
		
	})
	
	//删除商品
	$(document).on("click",".delete",function(){
		var id=$(this).attr("data-id");
		$.ajax({
			type:"post",
			url:"deleteProductById/"+id,
			data:{},
			dataType:"json",
			success:function(msg){
				console.log("deletePropertyById："+msg);
				alert(msg.result);
				location.reload();
			}
		});
		
	})
	
	$.ajax({
		type:"post",
		url:"getProduct/"+cid,
		data:{},
		dataType:"json",
		success:function(msg){			
			//console.log(msg);			
			$("#pagesum").val(msg);
			//分页123的隐藏
			if(Math.ceil(msg/pagesize)<3){
				$("#three").parent().hide();
			}
			if(Math.ceil(msg/pagesize)<2){
				$("#two").parent().hide();
			}

		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
