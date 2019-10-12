$(function(){
	//获得category条目总数
	//计算页面总数
	$.ajax({
		type:"get",
		url:"getCategoryAmount",
		data:{},
		dataType:"json",
		success:function(msg){
			$("#amount").val(msg);
			totalPage=Math.ceil(msg/pageSize);
			if(totalPage==1){
				$("#nextli").attr("class","page-item disabled");
				$("#lastPageli").attr("class","page-item disabled");
			}
			pagination();
			getPageInfo();
			
		}
	})
	
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
	
	$(document).on("click",".bin",function(){
		var id=$(this).attr("data-id");
		alert(id);
		$.ajax({
			type:"post",
			url:"deleteCategory/"+id,
			data:{},
			dataType:"json",
			success:function(msg){
				alert("删除成功");
			}
		})
	})
	
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
				$("#table1 tbody").empty();
				for(var i=0;i<msg.length;i++){
					$("#table1 tbody").append("<tr><td>"+msg[i].id+"</td><td><img src='img/cimg/"+msg[i].id+".jpg' height='50' width='500'/></td><td>"+msg[i].name+"</td><td><img src='img/icon/book_bookmark_16px_562338_easyicon.net.png' /></td>"+
					"<td><img src='img/icon/shopping_cart_16px_562666_easyicon.net.png' /></td>"+
					"<td><img src='img/icon/brush_16px_562342_easyicon.net.png' /></td>"+
					"<td class='bin' data-id='"+msg[i].id+"'><img src='img/icon/bin_16px_562337_easyicon.net.png' /></td></tr>");
				}
				
				
			}
		});
	}