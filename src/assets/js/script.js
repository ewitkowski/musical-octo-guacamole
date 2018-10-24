$.fn.dataTable.ext.search.push(

    function (settings, data, dataIndex) {
        
        var teamSel = parseInt($('#team').val(), 10);
        
        var teamCol1 = parseFloat(data[1]) || 0;
        var teamCol2 = parseFloat(data[2]) || 0;

        if (isNaN(teamSel) ||
             (teamSel == teamCol1) ||
            (teamSel == teamCol2)) {
            return true;
        }
        return false;
    }

);
$(window).load(function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function () {
		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});
		
		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});
		
		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();
		
		//MagnificPopup
		$('.image-link').magnificPopup({type:'image'});


		//// OwlCarousel N1
		//$("#owl-demo").owlCarousel({
		//	autoPlay: 3000,
		//	items : 3,
		//	itemsDesktop : [1199,3],
		//	itemsDesktopSmall : [979,3]
		//});

		//// OwlCarousel N2
		//$("#owl-demo-1").owlCarousel({
		//	  navigation : false, // Show next and prev buttons
		//	  slideSpeed : 300,
		//	  paginationSpeed : 400,
		//	  singleItem:true
		//});

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});
		
		////Subscribe
		//new UIMorphingButton( document.querySelector( '.morph-button' ) );
		//// for demo purposes only
		//[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
		//	bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		//} );

		var tableSched = $('#tableSched').DataTable({
		    responsive: true,
            fixedHeader: true
		});

		var tableStandings = $('#tableStandings').DataTable({
		    responsive: true,
		    fixedHeader: true
		});

		$('#team').change(function () {
		    tableSched.draw();
		});


		$('#submitMail').click(function () {

		    $.ajax({
		        type: "POST",
		        contenttype: "application/json; charset=utf-8",
		        data: {
		            "fromAdd": $("#InputEmail").val(),
		            "name": $("#InputName").val(),
		            "msgBody": $("#InputMessage").val()
		        },
		        url: "../Services/Services.asmx/SendMail",
		        dataTyp: "json",
		        success: function (res) {
		            $("#divEmailSuccess").show();
		            $("#InputEmail").val('');
		            $("#InputName").val('');
		            $("#InputMessage").val('');
		        },
		        error: function (err) {
		            alert('There was an error sending this message');
                    
		        }
		    });

		});

});


