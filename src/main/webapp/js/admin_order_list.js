$(function(){
	$.ajax({
		type:"post",
		url:"selectAllOrder",
		data:{},
		dataType:"json",
		success:function(res){
			for(a in res){
				var price=0;
				var num=0;
				for(i in res[a].orderItem){
					price=price+res[a].orderItem[i].itemPrice*res[a].orderItem[i].number;
					num=num+res[a].orderItem[i].number;
				}
				
				if(res[a].ostatus=="未发货"){
					$("#t_order").append("<tr id='"+res[a].id+"'>" +
							"<td>"+res[a].orderCode+"</td>" +
							"<td>"+res[a].ostatus+"</td>" +
							"<td>"+price+"</td>" +
							"<td>"+num+"</td>" +
							"<td>"+res[a].createDate+"</td>" +
							"<td>"+res[a].payDate+"</td>" +
							"<td>"+res[a].deliveryDate+"</td>" +
							"<td>"+res[a].confirmDate+"</td>" +
							
							"<td></td>" +
							"<td><button data-flag='0' oid='"+res[a].id+"' type='button' class='orderPageCheckOrderItems btn btn-primary btn-sm'>查看详情</button>" +
							"<button type='button' style='margin-left:5px' id='btn_send' value='"+res[a].id+"' class='btn btn-primary btn-sm'>发货</button></td>" +
							"</tr>");
				}else{
					$("#t_order").append("<tr>" +
							"<td>"+res[a].orderCode+"</td>" +
							"<td>"+res[a].ostatus+"</td>" +
							"<td>"+price+"</td>" +
							"<td>"+num+"</td>" +
							"<td>"+res[a].createDate+"</td>" +
							"<td>"+res[a].payDate+"</td>" +
							"<td>"+res[a].deliveryDate+"</td>" +
							"<td>"+res[a].confirmDate+"</td>" +
							
							"<td></td>" +
							"<td><button data-flag='0' oid='"+res[a].id+"' type='button' class='orderPageCheckOrderItems btn btn-primary btn-sm'>查看详情</button>" +
							"</td>" +
							"</tr>");
				}
				
				
			}
		}
		
	})
	
	//点击查看详情，查询oid对应的order item
	$(document).on("click","button:contains('查看详情')",function(event){
		var this_temp=$(this);
		var oid=$(this).attr("oid");
		var flag=$(this).attr("data-flag");
		
		//发送请求到OrderitemController查看order item请求
		$.ajax({
			type:"post",
			url:"getOrderItems/"+oid,
			data:{},
			dataType:"json",
			success:function(msg){
				var img;
				if(flag==0){
					for(var i=0;i<msg.length;i++){
						if(msg[i].p.pro==""){
							img="<img width='40px' height='40px' src='img/chanpin/0.jpg' />";
						}else{
							img="<img width='40px' height='40px' src='img/chanpin/"+msg[i].p.pro[0].id+".jpg' />"
						}
						
						var tr="<tr class='insert' style='display: table-row;'><td colspan='10' align='center'>"+
						"<div class='orderPageOrderItem'><table width='800px' align='center' class='orderPageOrderItemTable'>"+
						"<tr><td align='left'>"+img+"</td>"+
						"<td><a><span>"+msg[i].p.name+"/"+msg[i].p.subTitle+"</span></a></td>"+
						"<td align='right'><span class='text-muted'>"+msg[i].number+"</span></td>"+
						"<td align='right'><span class='text-muted'>单价：￥"+msg[i].itemPrice+"</span></td>"+
						"</tr></table></div></td></tr>"
						this_temp.parent().parent().after(tr);
						this_temp.attr("data-flag",1);
					}
				}else{
					$(".insert").hide();
					this_temp.attr("data-flag",0);
				}
				
				
			}
			
		})
	})
	
	$(document).on("click","button:contains('发货')",function(event){
		
		var index=event.target.value;
		//console.log(($(event.target).parent().siblings().eq(1))[0]);
		$.ajax({
			type:"post",
			url:"updateOrderOstatus/"+index,
			data:{},
			dataType:"json",
			success:function(res){
				$(event.target).parent().siblings().eq(1).text("已发货");
			}
			
			
		})
		
	})
	
	
})