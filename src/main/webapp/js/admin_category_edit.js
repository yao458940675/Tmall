$(function(){
	var id=location.href.substr(location.href.indexOf("=")+1);
	$("#updateCategory").click(function(){
		var name=$("#categoryName").val();
		var file=$("#customFile").get(0).files[0];
		var upData=new FormData(document.getElementById("updateC"));
		if(name.trim()!="" && file!=undefined && file.type.indexOf("image")==0){
			$.ajax({
				type:"post",
				url:"updateCategory/"+id,
				data:upData,
				dataType:"text",
				contentType: false, //不设置内容类型
                processData: false, //不处理数据
				success:function(msg){
					alert("上传成功");
				},
				error:function(msg){
					alert("报错");
				}
			})
		}else{
			alert("请输入有效内容并上传图片");
		}
	});
	
	
})