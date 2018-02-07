$(document).ready(function(){
    //$("button").click(function(){
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://ucf6-fap0216-crm.oracledemos.com/salesApi/resources/11.13.0.0/loyaltyMembers/300000157819931?onlyData=true&fields=PointTypeBVal,PointTypeCVal",
		  "method": "GET",
		  "headers": {
			"authorization": "Basic am9obi5kdW5iYXI6amJZODM4NTQ="
		  }
		}

		$.ajax(settings).done(function (response) {
			if (response.PointTypeBVal == 1) {
				$("#social").addClass('done');
			}
							console.log("1");
			if (response.PointTypeCVal >= 1) {
				console.log("c1");
				$("#cerveja").addClass('done');
			}
		});
	//});
});

