
$('.owl-carousel').owlCarousel({
  // stagePadding: 50,
  loop: true,
  // margin: 10,
  nav: true,
  dots:false,
  animateOut: 'fadeOut',
  smartSpeed:500,
 
  autoplay:true,
  // autoplayTimeout:1300,
  
  
  
  navText: [
      '<i class="fa fa-angle-left " aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  navContainer: '.main-content .custom-nav',
  responsive:{
      0:{
          items: 1
        
      },
      600:{
          items: 1
      },
      1000:{
          items: 1
      }
  }
});

    



function setNewImage()
{
    document.getElementById("img1").src="images/illustration/downcup.jpg";
}

function SetOldImage(){
  document.getElementById("img1").src="images/illustration/upcup.jpg";
}



function setfurnitureImage()
{
    document.getElementById("Furniture").src="images/illustration/brown-bear-printed-sweater.jpg";
}

function SetfurnitureoldImage(){
  document.getElementById("Furniture").src="images/illustration/brown-bear-printed-sweater2.jpg";
}


function setposterImage()
{
    document.getElementById("Poster").src="images/illustration/the-best-is-yet-to-come-framed-poster.jpg";
}

function SetposteroldImage(){
  document.getElementById("Poster").src="images/illustration/the-best-is-yet-to-come-framed-poster2.jpg";
}

function setstandImage()
{
    document.getElementById("stand").src="images/illustration/the-adventure-begins-framed-poster.jpg";
}

function SetstandoldImage(){
  document.getElementById("stand").src="images/illustration/the-adventure-begins-framed-poster2.jpg";
}



function setchairImage()
{
    document.getElementById("chair").src="images/illustration/today-is-a-good-day-framed-poster.jpg";
}

function SetchairoldImage(){
  document.getElementById("chair").src="images/illustration/today-is-a-good-day-framed-poster2.jpg";
}

function settableImage()
{
    document.getElementById("Table").src="images/illustration/mug-the-adventure-begins2.jpg";
}

function SettableoldImage(){
  document.getElementById("Table").src="images/illustration/mug-the-adventure-begins.jpg";
}



function setfurniture2Image()
{
    document.getElementById("Furniture2").src="images/illustration/brown-bear-printed-sweater.jpg";
}

function Setfurniture2oldImage(){
  document.getElementById("Furniture2").src="images/illustration/brown-bear-printed-sweater2.jpg";
}


function setchair2Image()
{
    document.getElementById("chair2").src="images/illustration/mountain-fox-cushion2.jpg";
}

function Setchair2oldImage(){
  document.getElementById("chair2").src="images/illustration/mountain-fox-cushion.jpg";
}


function setchair3Image()
{
    document.getElementById("chair3").src="images/illustration/brown-bear-cushion2.jpg";
}

function Setchair3oldImage(){
  document.getElementById("chair3").src="images/illustration/brown-bear-cushion.jpg";
}

function setchair4Image()
{
    document.getElementById("chair4").src="images/illustration/hummingbird-cushion2.jpg";
}

function Setchair5oldImage(){
  document.getElementById("chair5").src="images/illustration/mountain-fox-vector-graphics.jpg";
}
function setchair5Image()
{
    document.getElementById("chair5").src="images/illustration/mountain-fox-vector-graphics2.jpg";
}

function Setchair4oldImage(){
  document.getElementById("chair4").src="images/illustration/hummingbird-cushion.jpg";
}


function Setchair6oldImage(){
    document.getElementById("chair6").src="images/illustration/brown-bear-vector-graphics2.jpg";
  }
  function setchair6Image()
  {
      document.getElementById("chair6").src="images/illustration/brown-bear-vector-graphics.jpg";
  }


  
  AOS.init({
    offset:300,
  });


  function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginLeft="0px";
    // document.getElementById("mainbox").innerHTML="Click on Cross Element and Close Menu";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
  //  document.getElementById("mainbox").innerHTML="&#9776; ";
  }
  