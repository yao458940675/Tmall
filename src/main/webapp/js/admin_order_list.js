$(function(){
	$.ajax({
		type:"post",
		url:"selectAllOrder",
		data:{},
		dataType:"json",
		success:function(res){
			console.log(res);
			for(a in res){
				if(res[a].ostatus=="未发货"){
					$("#t_order").append("<tr>" +
							"<td>"+res[a].orderCode+"</td>" +
							"<td>"+res[a].ostatus+"</td>" +
							"<td>"+res[a].oi[0].itemPrice+"</td>" +
							"<td>"+res[a].oi[0].number+"</td>" +
							"<td>"+res[a].createDate+"</td>" +
							"<td>"+res[a].payDate+"</td>" +
							"<td>"+res[a].deliveryDate+"</td>" +
							"<td>"+res[a].confirmDate+"</td>" +
							
							"<td></td>" +
							"<td><button  oid='"+res[a].id+"' type='button' class='orderPageCheckOrderItems btn btn-primary btn-sm'>查看详情</button>" +
							"<button type='button' style='margin-left:5px' id='btn_send' class='btn btn-primary btn-sm'>发货</button></td>" +
							"</tr>");
				}else{
					$("#t_order").append("<tr>" +
							"<td>"+res[a].orderCode+"</td>" +
							"<td>"+res[a].ostatus+"</td>" +
							"<td>"+res[a].oi[0].itemPrice+"</td>" +
							"<td>"+res[a].oi[0].number+"</td>" +
							"<td>"+res[a].createDate+"</td>" +
							"<td>"+res[a].payDate+"</td>" +
							"<td>"+res[a].deliveryDate+"</td>" +
							"<td>"+res[a].confirmDate+"</td>" +
							
							"<td></td>" +
							"<td><button  oid='"+res[a].id+"' type='button' class='orderPageCheckOrderItems btn btn-primary btn-sm'>查看详情</button>" +
							"</td>" +
							"</tr>");
				}
				
				
			}
		}
		
	})
	
	
	//console.log($("button:contains('查看详情')"));
	$(document).on("click","button:contains('查看详情')",function(event){
		console.log(event.target);
	})
	
	
})