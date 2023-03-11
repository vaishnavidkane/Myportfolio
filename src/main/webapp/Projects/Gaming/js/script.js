$('.new1').owlCarousel({
    loop:true,
    dots:false,
    
    margin:20,
    nav:true,
    navText : [' <i class="fas fa-chevron-left"></i> ','<i class="fas fa-chevron-right"></i>'],
    
    responsive:{
        0:{
            items:1
            
        },
        994:{
            items:3
        },
        600:{
            items:3

        },
        1000:{
            items:3
        }
    }
})


$('.new2').owlCarousel({
    loop:true,
    dots:false,
   nav:false,
    margin:0,
   
    autoplay:true,
    autoplayTimeout:1000,
   
  
    
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:3

        },
        994:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

    function openFunction(){
        document.getElementById("menu").style.width="300px";
        document.getElementById("mainbox").style.marginLeft="300px";
       
       }
      function closeFunction(){
       document.getElementById("menu").style.width="0px";
       document.getElementById("mainbox").style.marginLeft="0px";
      
      }

    
      AOS.init(
          {
              offset:120,
              duration:400,
          }
      );


      var myVar;

      function myFunction() {
        myVar = setTimeout(showPage, 4000);
      }
      
      function showPage() {
        document.getElementById("loader_bg").style.display = "none";
        
      }

    