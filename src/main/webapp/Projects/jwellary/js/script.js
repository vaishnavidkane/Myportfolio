$('.new').owlCarousel({
    loop:true,
  
    nav:true,
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
    document.getElementById("mainbox").style.marginLeft="0px";
    // document.getElementById("mainbox").innerHTML="Click on Cross Element and Close Menu";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
//    document.getElementById("mainbox").innerHTML="&#9776; Open";
  }

  AOS.init();