$(document).ready(function () {

	var root = 'http://jsonplaceholder.typicode.com';
	
	$('#btn').on('click', function(){
		$.ajax({
			url: root + '/users',
			method: 'GET', //GET, POST, PUT, DELETE
			contentType: 'application/json', //ask server to return json
			dataType: 'json', //says to server we are sending json
			//Call if request return successfully
			
			success: function (response) {
				alert(response.length);
			},

			//Call in case of request error
			error: function (request, errorType, errorMessage){
				alert('Error: ' + errorType + ', message: ' + errorMessage)
				console.log(request);
			}			
		});
	})

	var conta = 0;

	$('#btn').on('click', function(conta_btn){
		conta ++
		console.log(conta);
	})
	$('#contatore').on('click', function(result_btn){
		alert(conta);
	})

	scrolled = true;
	var scrollMove;

	$("#scroll").on("scroll", function() {
		if(scrolled){ //when scroll
			console.log("Stai scrollando!");
			scrolled=false;
		};
		if(scrollMove > $(this).scrollTop()){ //when scroll to top
			console.log("Stai salendo!")
		}
		if(scrollMove < $(this).scrollTop()){ //when scroll to bottom
			console.log("Stai scendendo!")
		}
		scrollMove = $(this).scrollTop();
	});

	$('#scroll').bind('scroll', function(){
	    if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight){ //when scroll is finished
	        console.log("Fine!");
	    };
	    if($(this).scrollTop() == 0){ //when scroll is on the top
	        console.log("Inizio!");
	    };
	});
});