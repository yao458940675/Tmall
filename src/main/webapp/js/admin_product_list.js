$(function(){
	
	$.ajax({
		type:"post",
		url:"getAllProduct",
		data:{},
		dataType:"json",
		success:function(res){
			console.log(res);
//			for(var i=0;i<msg.length;i++){
//				$("#table1 tbody").append("<tr><td>"+msg[i].id+"</td><td>图片</td><td>"+msg[i].name+"</td><td><img src='img/icon/book_bookmark_16px_562338_easyicon.net.png' /></td>"+
//				"<td><img src='img/icon/shopping_cart_16px_562666_easyicon.net.png' /></td>"+
//				"<td><img src='img/icon/brush_16px_562342_easyicon.net.png' /></td>"+
//				"<td><img src='img/icon/bin_16px_562337_easyicon.net.png' /></td></tr>");
//			}
			
		}
	});
})