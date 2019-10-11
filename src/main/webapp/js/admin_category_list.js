$(function(){
	pageSize=3;
	pageNum=1;
	totalPage=0;
	start=1;
	end=3;
	
	//获得category条目总数
	$.ajax({
		type:"get",
		url:"getCategoryAmount",
		data:{},
		dataType:"json",
		success:function(msg){
			$("#amount").val(msg);
			totalPage=Math.ceil(msg/pageSize);
			pagination();
			getPageInfo();
			$("#previousli").attr("class","page-item disabled");
			$("#firstPageli").attr("class","page-item disabled");
		}
	})
	//初始化页面，根据pageSize,pageNum获得category信息
	//并拼接到table上
	function getPageInfo(){
		$.ajax({
			type:"post",
			url:"getAllCategories/"+pageSize+"/"+pageNum,
			data:{},
			dataType:"json",
			success:function(msg){
				$("#table1 tr:not(:first)").remove();
				for(var i=0;i<msg.length;i++){
					$("#table1 tbody").append("<tr><td>"+msg[i].id+"</td><td><img src='img/cimg/"+msg[i].id+".jpg'/></td><td>"+msg[i].name+"</td><td><img src='img/icon/book_bookmark_16px_562338_easyicon.net.png' /></td>"+
					"<td><img src='img/icon/shopping_cart_16px_562666_easyicon.net.png' /></td>"+
					"<td><img src='img/icon/brush_16px_562342_easyicon.net.png' /></td>"+
					"<td><img src='img/icon/bin_16px_562337_easyicon.net.png' /></td></tr>");
				}
				
				
			}
		});
	}
	var formData;
	//添加类型
	//更改图片名称
	$("#addCategory").click(function(){
		var name=$("#categoryName").val();
		var file=$("#customFile").get(0).files[0];
		if(name.trim()!="" && file!=undefined && file.type.indexOf("image")==0){
			$.ajax({
				type:"post",
				url:"saveCategory/"+name,
				data:{},
				dataType:"json",
				success:function(msg){
					var upFile =new File([file], msg+".jpg",{type:"image/jpeg"});
					formData = new FormData(document.getElementById("imgForm"));
					formData.append("upload",upFile);
					console.log("准备上传");
					$.ajax({
						type:"post",
						url:"uploadCategoryImage",
						data:formData,
						dataType:"json",
						contentType:false,
						processData:false,
						success:function(msg){
							alert("上传成功");
						}
					})
				}
			})
		}else{
			alert("请输入有效内容并上传图片");
		}
		
	});
	

	//实现分页查询
	function pagination(){
		if(pageNum<=1){
			$("#previousli").attr("class","page-item disabled");
			$("#firstPageli").attr("class","page-item disabled");
		}if(pageNum>=totalPage){
			$("#nextli").attr("class","page-item disabled");
			$("#lastPageli").attr("class","page-item disabled");
		}else{
			$("#previousli").attr("class","page-item");
			$("#firstPageli").attr("class","page-item");
			$("#nextli").attr("class","page-item");
			$("#lastPageli").attr("class","page-item");
		}
		$("#firstli").attr("class","page-item");
		$("#secondli").attr("class","page-item");
		$("#thirdli").attr("class","page-item");
		if(pageNum==1){
			$("#first").html(1);
			$("#second").html(2);
			$("#third").html(3);
			$("#firstli").attr("class","page-item active");
		}
		else{
			start=pageNum-1;
			end=pageNum+1;
			$("#first").html(start);
			$("#second").html(pageNum);
			$("#third").html(end);
			$("#secondli").attr("class","page-item active");
		}
		
	}
	$("#previous").click(function(){
		pageNum--;
		if(pageNum>=1){
			pagination();
			getPageInfo();
		}
	});
	$("#next").click(function(){
		pageNum++;
		if(pageNum<=totalPage){
			pagination();
			getPageInfo();
		}
	});
	$("#first").click(function(){
		pageNum=parseInt($("#first").html());
		if(pageNum>=1){
			pagination();
			getPageInfo();
			console.log(pageNum);
		}
	});
	$("#second").click(function(){
		pageNum=parseInt($("#second").html());
		pagination();
		getPageInfo();
	});
	$("#third").click(function(){
		pageNum=parseInt($("#third").html());
		if(pageNum<=totalPage){
			pagination();
			getPageInfo();
		}
	});
	$("#firstPage").click(function(){
		pageNum=1;
		pagination();
		getPageInfo();
	});
	$("#lastPage").click(function(){
		pageNum=totalPage;
		pagination();
		getPageInfo();
	});
	
})