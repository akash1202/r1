$(document).ready(function(e){
	$("#searchtxt").keyup(function(e){
		if($(this).val()==""){
			$(".sugg").hide();
		}
		else{
			$(".sugg").show();
			var s=$("#searchtxt").val();
			//alert(s);
			$.ajax({
				url:"./services/connection.php",
				data:"searchtxt="+s,
				type:"POST",
				dataType:"json",
				success:function(data){
					var s="";
					for(var i=0;i<data.length;i++){
					s+="<li id='"+i+"'>"+data[i].country_code+" "+data[i].country_name+"</li>";	
					}
					s+="";
					$("#ab1").html(s);
			}});		
		}
		
	});
	
	$("#ab1").on("mouseenter","li",function(e){
		var s="";
		for(var i=1;i+1<$(this).html().split(' ').length;i++){
			s+=$(this).html().split(' ')[i]+" ";
		}
		s+=$(this).html().split(' ')[i];
		$("#searchtxt").val(s);
	});
	$("#ab1").on("click","li",function(e){
		$(".sugg").hide();
	});
	
});