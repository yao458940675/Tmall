$(function(){
	pageSize=5;
	pageNum=1;
	console.log("123");
	//初始化页面，根据pageSize,pageNum获得category信息
	//并拼接到table上
	$.ajax({
		type:"post",
		url:"getAllCategories/"+pageSize+"/"+pageNum,
		data:{},
		dataType:"json",
		success:function(msg){
			console.log("id="+msg[0].id);
			for(var i=0;i<msg.length;i++){
				$("#table1 tbody").append("<tr><td>"+msg[i].id+"</td><td>图片</td><td>"+msg[i].name+"</td><td><img src='img/icon/book_bookmark_16px_562338_easyicon.net.png' /></td>"+
				"<td><img src='img/icon/shopping_cart_16px_562666_easyicon.net.png' /></td>"+
				"<td><img src='img/icon/brush_16px_562342_easyicon.net.png' /></td>"+
				"<td><img src='img/icon/bin_16px_562337_easyicon.net.png' /></td></tr>");
			}
			
		}
	});
})