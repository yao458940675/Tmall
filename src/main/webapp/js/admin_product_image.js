var pid=location.href.substr(location.href.lastIndexOf("=")+1);
var cid=location.href.substr(location.href.indexOf("=")+1).split("/")[0];
var file;
function getProductImages(){
	//页面初始化
	$.ajax({
		type:"post",
		url:"getProductImages/"+pid,
		data:{},
		dataType:"json",
		success:function(msg){
			$("#table1 tbody").empty();
			$("#table2 tbody").empty();
			for(var i=0;i<msg.length;++i){
				if(msg[i].type=="单个"){
					$("#table1 tbody").append("<tr><td>"+msg[i].id+"</td><td><img src='img/chanpin/"+msg[i].id+".jpg' height='40' width='40'/></td>"+
					"<td class='bin' data-id='"+msg[i].id+"'><img src='img/icon/bin_16px_562337_easyicon.net.png' /></td></tr>")
				}else{
					$("#table2 tbody").append("<tr><td>"+msg[i].id+"</td><td><img src='img/chanpin/"+msg[i].id+".jpg' height='40' width='40'/></td>"+
					"<td class='bin' data-id='"+msg[i].id+"'><img src='img/icon/bin_16px_562337_easyicon.net.png' /></td></tr>")
				}
			}
		}
		
	})
}
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
	getProductImages();
	
	$("#imageBtn1").click(function(){
		type="单个";
		file=$("#productfile").get(0).files[0];
		saveProductImage(pid, type);
		
	})
	$("#imageBtn2").click(function(){
		type="详情";
		file=$("#detailfile").get(0).files[0];
		saveProductImage(pid, type);
		
	})
	//发送ajax请求，获得产品图片id
	function saveProductImage(pid,type){
		
		if(file!=undefined && file.type.indexOf("image")==0){
			alert("准备发送");
			$.ajax({
				type:"post",
				url:"saveProductImage/"+pid+"/"+type,
				data:{},
				dataType:"json",
				success:function(msg){
					var upFile =new File([file], msg+".jpg",{type:"image/jpeg"});
					formData = new FormData(document.getElementById("imgForm"));
					formData.append("upload",upFile);
					console.log("准备上传");
					$.ajax({
						type:"post",
						url:"uploadProductImage",
						data:formData,
						dataType:"json",
						contentType:false,
						processData:false,
						success:function(msg){
							alert("上传成功");
							getProductImages();
						}
					})
				}	
			})
		}
	}
	
	$(document).on("click",".bin",function(){
		var id=$(this).attr("data-id");
		alert(id);
		$.ajax({
			type:"post",
			url:"deleteProductImage/"+id,
			data:{},
			dataType:"json",
			success:function(msg){
				alert("删除成功");
				getProductImages();
			}
		})
	})
})

