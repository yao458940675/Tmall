$(function(){
	//初始化根据id查询所有属性和属性值
	var id = location.href.substr(location.href.indexOf('=')+1);
	$.ajax({
		type:"post",
		url:"getPropertiesById/"+1,
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data);
			var j=-1;
			for(var i=0;i<data.length;i++){
				if(data[i].name=="品牌"){
					var text=$("#nef").text();
					$("#nef").text("/"+data[i].propertyValue.value+text);
				}else if(data[i].name=="产品名称"||data[i].name=="名称"){
					var text=$("#nef").text();
					$("#nef").text(text+"/"+data[i].propertyValue.value);
					j==i;
				}

				if(i%2==0){
					$("#mainrow").append("<div class=\"col-sm-1 offset-md-3\" >"+data[i].name+"</div><div class=\"col-sm-2 \"><input  class=\"textinput\" value="+data[i].propertyValue.value+" type=\"text\">    <input type='hidden'  value='"+data[i].propertyValue.id+"'>     </div>");
					
					}else{
						$("#mainrow").append("<div class=\"col-sm-1 \" >"+data[i].name+"</div><div class=\"col-sm-2 \"><input  class=\"textinput\" value="+data[i].propertyValue.value+" type=\"text\">  <input type='hidden'  value='"+data[i].propertyValue.id+"'> </div>");	
						
				}
			}
		}
	});

	//onbulr 事件触发修改
	$(document).on("change",".textinput",function(){
		value=$(this).val();
		id=$(this).next().val();
		console.log(value+"   "+id);
		$(this).css({"border":"1px solid green" ,"outline":"1px solid green"});
		$.ajax({
			type:"post",
			url:"updataPropertieById/"+value+"/"+id,
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data);

			}
		});
	})








})
