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
		var upData=new FormData(document.getElementById("saveCategory"));
		if(name.trim()!="" && file!=undefined && file.type.indexOf("image")==0){
			$.ajax({
				type:"post",
				url:"saveCategory",
				data:upData,
				dataType:"text",
				contentType: false, //不设置内容类型
                processData: false, //不处理数据
				success:function(msg){
					alert("上传成功");
					location.reload();
				}
			})
		}else{
			alert("请输入有效内容并上传图片");
		}
		
	});
	//点击"删除"图标，删除类别
	$(document).on("click",".bin",function(){
		var id=$(this).attr("data-id");
		$.ajax({
			type:"post",
			url:"deleteCategory/"+id,
			data:{},
			dataType:"text",
			success:function(msg){
				alert("删除成功");
				location.reload() ;
			}
		})
	})
	//点击"编辑"，进入编辑页面
	$(document).on("click",".brush",function(){
		var id=$(this).attr("data-id");
		location.href="admin_category_edit.html?id="+id;
	})
	//点击"属性管理"图标，进入属性管理页面
	$(document).on("click",".property",function(){
		var cid=$(this).attr("data-id");
		location.href="admin_property_list.html?cid="+cid;
	})
	//点击"产品管理"图标，进入产品管理页面
	$(document).on("click",".product",function(){
		var cid=$(this).attr("data-id");
		location.href="admin_product_list.html?cid="+cid;
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
					$("#table1 tbody").append("<tr><td>"+msg[i].id+"</td>"+
					"<td><img src='img/cimg/"+msg[i].id+".jpg' height='40' width='500'/></td><td>"+msg[i].name+"</td>"+
					"<td class='property' data-id='"+msg[i].id+"'><img src='img/icon/book_bookmark_16px_562338_easyicon.net.png' /></td>"+
					"<td class='product' data-id='"+msg[i].id+"'><img src='img/icon/shopping_cart_16px_562666_easyicon.net.png' /></td>"+
					"<td class='brush' data-id='"+msg[i].id+"'><img src='img/icon/brush_16px_562342_easyicon.net.png' /></td>"+
					"<td class='bin' data-id='"+msg[i].id+"'><img src='img/icon/bin_16px_562337_easyicon.net.png' /></td></tr>");
				}
				
				
			}
		});
	}