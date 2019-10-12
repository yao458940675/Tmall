
	pageSize=5;
	pageNum=1;
	totalPage=0;
	start=1;
	end=3;
	//实现分页查询
	function pagination(){
		if(pageNum<=1){
			$("#previousli").attr("class","page-item disabled");
			$("#firstPageli").attr("class","page-item disabled");
		}else if(pageNum>=totalPage){
			$("#nextli").attr("class","page-item disabled");
			$("#lastPageli").attr("class","page-item disabled");
		}else{
			$("#previousli").attr("class","page-item");
			$("#firstPageli").attr("class","page-item");
			$("#nextli").attr("class","page-item");
			$("#lastPageli").attr("class","page-item");
		}
		$("#firstli").attr("class","page-item");
		$("#secondli").attr("class","page-item");
		$("#thirdli").attr("class","page-item");
		if(pageNum==1){
			$("#first").html(1);
			$("#second").html(2);
			$("#third").html(3);
			$("#firstli").attr("class","page-item active");
		}
		else{
			start=pageNum-1;
			end=pageNum+1;
			$("#first").html(start);
			$("#second").html(pageNum);
			$("#third").html(end);
			$("#secondli").attr("class","page-item active");
		}
		
	}
	$(document).on("click","#previous",function(){
		pageNum--;
		if(pageNum>=1){
			pagination();
			getPageInfo();
		}
	})
	$(document).on("click","#next",function(){
		pageNum++;
		if(pageNum<=totalPage){
			pagination();
			getPageInfo();
		}
	})
	$(document).on("click","#first",function(){
		pageNum=parseInt($("#first").html());
		if(pageNum>=1){
			pagination();
			getPageInfo();
			console.log(pageNum);
		}
	})
	
	$(document).on("click","#second",function(){
		pageNum=parseInt($("#second").html());
		pagination();
		getPageInfo();
	})
	
	$(document).on("click","#third",function(){
		pageNum=parseInt($("#third").html());
		if(pageNum<=totalPage){
			pagination();
			getPageInfo();
		}
	})
	
	$(document).on("click","#firstPage",function(){
		pageNum=1;
		pagination();
		getPageInfo();
	})
	$(document).on("click","#lastPage",function(){
		pageNum=totalPage;
		pagination();
		getPageInfo();
	})
	

	
