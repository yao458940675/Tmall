$(function(){

	var pagesize=5;
	var pagenum=1;
	getPageData();	
	function getPageData(){
		$.ajax({
			type:"post",
			url:"getAllProduct/"+pagesize+"/"+pagenum,
			data:{},
			dataType:"json",
			success:function(res){
				console.log(res);
				$("#tbody").empty();
				for(var i=0;i<res.length;i++){
					$("tbody").append("<tr><td>"+res[i].id+"</td>" +
							"<td><img width='40px' src='img/chanpin/"+res[i].pro.id+".jpg'></td>" +
							"<td>"+res[i].name+"</td>" +
							"<td>"+res[i].subTitle+"</td><td>"+res[i].originalPrice+"</td><td>"+res[i].promotePrice+"</td>" +
							"<td>"+res[i].stock+"</td>" +
							"<td><a href='#?pid="+res[i].id+"'><span class='glyphicon glyphicon-picture'></span></a></td>" +
							"<td><a href='#?pid="+res[i].id+"'>" +
							"<span class='glyphicon glyphicon-th-list'></span></a></td>" +
							"<td><a href='#?pid="+res[i].id+"'><span class='glyphicon glyphicon-edit'></span></a></td>" +
							"<td><a deleteLink='true' href='#?pid="+res[i].id+"'><span class='glyphicon glyphicon-trash'></span></a></td></tr>");
					
							
				
				}
				
			}
		});
	}
	$("#one,#start").click(function(){
		pagenum=1;		
		getPageData();
		$("#one,#start").parent().parent().children().attr("class","page-item");
		$("#one,#start,#last").parent().attr("class","page-item disabled");
	})
	
	$("#two").click(function(){
		pagenum=2;		
		getPageData();
		$("#two").parent().parent().children().attr("class","page-item");
		$("#two").parent().attr("class","page-item disabled");
	})
	
	$("#three").click(function(){
		pagenum=3;		
		getPageData();
		$("#three").parent().parent().children().attr("class","page-item");
		$("#three").parent().attr("class","page-item disabled");
	})
	//上一页
	$("#last").click(function(){
		if(pagenum>1){
			pagenum=pagenum-1;
			getPageData();
			$("#last").parent().parent().children().attr("class","page-item");
		}

	})
	//下一页
	$("#next").click(function(){
		console.log("pagesum:"+$("#pagesum").val());		
		if(pagenum<$("#pagesum").val()){
			pagenum=pagenum+1;
			getProperty();
			$("#next").parent().parent().children().attr("class","page-item");
		}
				
	})
	//末页
	$("#final").click(function(){
		pagenum=$("#pagesum").val();
		getPageData();
		$("#final").parent().parent().children().attr("class","page-item");
		$("#final,#next").parent().attr("class","page-item disabled");
	})
	
	
})
