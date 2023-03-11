$(document).ready(function(){
    $(".new1").owlCarousel({
        nav:false,
        nav:true,
      
        // navText[
        //     'prev',
        //     'next',

        // ],
        // dots:false,
        navText : [' <i class="fas fa-arrow-left"></i> ','<i class="fas fa-arrow-right"></i>'],
        dots:true,
        margin:10,
      
      
        
        loop:true,
        autoplay:true,
        autoplayTimeout:1200,
        // animateOut: 'fadeOut',
       
        // smartSpeed:500,

        responsive:{
            320:{
                items:1
            },
            768:{
                items:4
            },
            994:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });


    $(".main").owlCarousel({

        


    });
});









$('.new2').owlCarousel({
    loop:true,
    
    nav:true,
    dots:true,
   
    
    
    // dotsData:true,
    // nav:false,
   
    autoplay:true,
    animateOut: 'fadeOut',
    navText : [' <i class="fas fa-arrow-left"></i> ','<i class="fas fa-arrow-right"></i>'],
    
  
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


function openFunction(){
    document.getElementById("menu").style.width="300px";
    // document.getElementById("mainbox").style.marginLeft="300px";
    // document.getElementById("mainbox").style.display = "none";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
  //  document.getElementById("mainbox").innerHTML="&#9776; Open";
  document.getElementById("mainbox").style.display = "block";
  }


  AOS.init();