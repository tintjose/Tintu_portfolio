// $(window).on("load",function(){
//   $(".loader").fadeOut(500);
// })


$(document).ready(function(){
  $('#slides').superslides({
    animation:'fade',play:5000,
    pagination:false
  });
var typed=new Typed(".typed",{
  strings: ["Software Engineer..", "Full Stack Developer..", "Web Developer..","Recent Graduate Student.."],
  typeSpeed: 80,
  loop: true,
  startDelay:1000,
  showCursor:false

});
$("down").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:4,
    smartSpeed:900,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});


       var skillsTopOffset=$(".skillssection").offset().top;
       $(window).scroll(function(){
         if(window.pageYOffset>skillsTopOffset-$(window).height()+200){
           $('.chart').easyPieChart({
                     easing:'easeInOut',
                     barColor:'#fff',
                     trackColor:false,
                     scaleColor: false,
                     lineWidth: 4,
                     size:152,
                     onStep: function(from, to, percent){
                       $(this.el).find('.percent').text(Math.round(percent));
                     }

                  });
         }
       });

$("#navigation li a").click(function(e){
  e.preventDefault();
  var targetElement=$(this).attr("href");
  var targetPosition=$(targetElement).offset().top;
  $("html,body").animate({scrollTop:targetPosition-50},"slow");
});



       const nav = $("#navigation");
   	const navTop = nav.offset().top;

   	$(window).on("scroll", stickyNavigation);

   	function stickyNavigation() {

   		var body = $("body");

   		if($(window).scrollTop() >= navTop) {
        body.css("padding-top",nav.outerHeight()+"px");
   			body.addClass("fixedNav");
   		}
   		else {
        body.css("padding-top",0);

   			body.removeClass("fixedNav");
   		}




   	}

});
