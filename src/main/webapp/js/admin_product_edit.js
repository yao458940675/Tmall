var pid=location.href.substr(location.href.lastIndexOf("=")+1);
var cid=location.href.substr(location.href.indexOf("=")+1).split("/")[0];
$(function(){
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
	//面包屑导航栏获得产品名称
	$.ajax({
		type:"post",
		url:"selectProductName/"+pid,
		data:{},
		dataType:"json",
		success:function(msg){
			$("#pname").html(msg.name+""+msg.subTitle);
		}
	})
	
	//初始化查询
	$.ajax({
		type:"post",
		url:"selectProductName/"+pid,
		data:{},
		dataType:"json",
		success:function(msg){
			console.log(msg.name);
			$("#cid").val(msg.cid);
			$("#name").val(msg.name);
			$("#subTitle").val(msg.subTitle);
			$("#stock").val(msg.stock);
			$("#originalPrice").val(msg.originalPrice);
			$("#promotePrice").val(msg.promotePrice);
			$("#propertyList").attr("href","admin_property_list.html?cid="+$("#propertyCid").val());
		}
				
	}); 
	
	//编辑
	$("#regBtn").click(function(){
					
			$.ajax({
				type:"post",
				url:"updateProductById/"+id,
				data:$("#form1").serialize(),
				dataType:"json",
				success:function(msg){
					console.log("updateProduct："+msg);
					alert(msg.result);
					location.href="admin_product_list.html";
				}
			});					
			
			
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})