$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav:false,
        //  nav:true,
       
        dots:true,
          
      
        loop:true,
    //  autoplay:true,
    //  autoplayTimeout:1500,

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

$("#card").flip(
    {
        autoplay:true,
        autoplayTimeout:1500,
        trigger:'hover'
    }
);


$("#new").flip(
    {
        trigger:'hover',
        // axis:'x',
    }
);
$("#new1").flip(
    {
        trigger:'hover',
      
    
    }
);


// $(document).ready(function(){
//     $(".icons").hover(function(){
//         $(".adjust").show(1000);//400 1000 is 1s 0.4ms
//         // $("#one").hide(1000);//400 1000 is 1s 0.4ms
      
//     });
// });


function myFunction() {
    var x = document.getElementById("nav-drop");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction() {
    var x = document.getElementById("nav-drowp");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginLeft="300px";
    document.getElementById("mainbox").style.display = "none";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
  //  document.getElementById("mainbox").innerHTML="&#9776; Open";
  document.getElementById("mainbox").style.display = "block";
  }


  AOS.init({
    offset:300,
  });
