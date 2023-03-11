
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            // nav:false,
            // nav:true,
            // dots:false,
            dots:true,
            margin:10,
            loop:true,
             autoplay:true,
             autoplayTimeout:2000,

            responsive:{
                320:{
                    items:1
                },
                768:{
                    items:1
                },
                994:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });


        $(".main").owlCarousel({

            


        });
    });


    AOS.init();


    function openFunction(){
        document.getElementById("menu").style.width="300px";
        document.getElementById("mainbox").style.marginLeft="0px";
       
       }
      function closeFunction(){
       document.getElementById("menu").style.width="0px";
       document.getElementById("mainbox").style.marginLeft="0px";
      
      }

