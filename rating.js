
function enviaPesquisa(){

	$(document).ready(function(){
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://ucf3-fap0185-fa-ext.oracledemos.com/crmRestApi/resources/11.13.17.08/loyaltyTransactions",
		  "method": "POST",
		  "headers": {
		    "Content-Type": "application/vnd.oracle.adf.resourceitem+json",
		    "Authorization": "Basic am9obi5kdW5iYXI6dUtNOTM3NTQ="
		  },
		  "data": "{\r\n  \"MemberNumber\": \"300000157820432\",\r\n  \"ProgramName\": \"Você Marche\",\r\n  \"TypeCodeName\": \"Acumulação\",\r\n  \"PointTypeName\": \"Pontos\",\r\n  \"AmountValue\": 74,\r\n  \"SubTypeName\": \"Crédito Manual\",\r\n  \"Comments\": \"Pesquisa\"\r\n}"
		}
		$.ajax(settings).done(function (response) {
		  console.log(response);
		  return true;
		});
	});

	document.getElementsByClassName("sendRating")[0].style.backgroundColor = "gray";
}

/*
function enviaPesquisa(){
	//Pega Informações do Membro
	$(document).ready(function(){
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://ucf3-fap0185-fa-ext.oracledemos.com:443/crmRestApi/resources/latest/loyaltyMembers/300000157814217",
		  "method": "PATCH",
		  "headers": {
		    "Content-Type": "application/vnd.oracle.adf.resourceitem+json",
		    "Authorization": "Basic dHNwaW5lbGk6b3JhY2xlMTIz",
		    "Cache-Control": "no-cache",
		    "Postman-Token": "2c84ddad-c942-c2a8-8d49-a654a4865ab1"
		  },
		  "data": "{\r\n\"PointTypeCVal\": 0\r\n}"
		}

		$.ajax(settings).done(function (response) {
		  console.log(response);
		});
	});
}*/