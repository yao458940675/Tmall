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
	
	//根据cid查询产品属性
	//根据pid查询产品属性值
	
	$.ajax({
		type:"post",
		url:"getPropertiesById/"+pid+"/"+cid,
		data:{},
		dataType:"json",
		success:function(data){
			var j=-1;
			for(var i=0;i<data.length;i++){
				var value;
				console.log(data[i].id);
				if(data[i].propertyValue==null){
					value="''";
				}else{
					value=data[i].propertyValue.value;
				}
				if(i%2==0){
					$("#mainrow").append("<div class=\"col-sm-1 offset-md-3\" >"+data[i].name+"</div><div class=\"col-sm-2 \"><input  class=\"textinput\" value="+value+" type=\"text\">    <input type='hidden'  value='"+data[i].id+"'></div>");
					
					}else{
						$("#mainrow").append("<div class=\"col-sm-1 \" >"+data[i].name+"</div><div class=\"col-sm-2 \"><input  class=\"textinput\" value="+value+" type=\"text\">  <input type='hidden'  value='"+data[i].id+"'> </div>");	
						
				}
			}
		}
	});

	//onbulr 事件触发修改
	$(document).on("change",".textinput",function(){
		value=$(this).val();
		ptid=$(this).next().val();
		alert(ptid);
		$(this).css({"border":"1px solid green" ,"outline":"1px solid green"});
		$.ajax({
			type:"post",
			url:"updataPropertieById/"+value+"/"+pid+"/"+ptid,
			data:{},
			dataType:"json",
			success:function(data){

			}
		});
	})








})
