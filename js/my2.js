		 $(document).ready(function() {
		 	//$('#menu1').load('home.html')
$('#spinner').hide()
		 	


		 	$('a').live('click', function() {
                $('#spinner').show()
		 		var clickid = $(this).parent('li').index();
		 		var myid = $(this).attr('id');
		 		
		 		switch (myid)
		 		{
		 			case "home":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
	                //$('#slider').css('display','block');
		 			break;
		 			case "aboutus":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('aboutus.html',function() {
		 				$('#spinner').hide()})
		 			
		 			break;
		 			case "progs":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('programs.html',function() {
		 				$('#spinner').hide()});
		 			
		 			break;
		 			case "jpnagar":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('jpnagar.html',function() {
		 				$('#spinner').hide()})
		 			break;
		 			case "indranagar":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('indranagar.html',function() {
		 				$('#spinner').hide()})
		 			break;
		 			case "testimonial":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('testimonial.html',function() {
		 				$('#spinner').hide()})
		 			break;
		 			case "calendar":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('calendar.html')
		 			break;
		 			case "gallery":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('gallery.html');
		 			$( "#myCarousel" ).carousel();
		 			//alert(myid);
		 			break;
		 			case "admissions":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('admission.html')
		 			break;
		 			case "foodmenu":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('foodmenu.html')
		 			break;
		 			case "careers":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('careers.html')
		 			break;
		 			case "contact":
		 			$('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('contactus.html')
		 			break;
                    case "feedback":
                    $('#menu1').html(" ");
		 		$('#slider').css('display','none');
		 			$('#menu1').load('feedback.html')
		 			break;
		 		};
	//alert(myid);
		 		//alert(clickid);

		 	});
		});
