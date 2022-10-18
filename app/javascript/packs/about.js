// /* window.onload = function(){
//     let navbar = $('#logo');
    
//     // Get the offset position of the navbar
//     let sticky = navbar.offsetTop;
//     if (window.pageYOffset >= sticky) {

//     window.onscroll = function() {myFunction()};

//     // Get the navbar
    
//     // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//     function myFunction() {
//         if (window.pageYOffset >= sticky) {
//             navbar.classList.add("sticky")
//         } else {
//             navbar.classList.remove("sticky");
//         }
//     }
// // } */

// $(document).ready(function(event) {
//     let lastKnownScrollPosition = 0;
//     let ticking = false;
//     let height= screen.height;
//     let c = document.body.scrollHeight + 1000;
//     let content = document.getElementsByClassName('page-container')[0];
    
//     let logo = document.getElementById('logo');
//     console.log(logo.style)
//     function doSomething(scrollPos) {
        
//         let newPos = Math.floor(scrollPos + (scrollPos/(c)) * height);
//         logo.style.top = newPos + 'px';
//     }
    
//     $(content).on('scroll', (e) => {
//       lastKnownScrollPosition = window.scrollY;
//       console.log("test");
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           doSomething(lastKnownScrollPosition);
//           ticking = false;
//         });
    
//         ticking = true;
//       }
//     });

// });


function scrollToAnchor(aid){
  var aTag = document.getElementById(aid);
  console.log(aTag.style);
  $('html,body').animate({scrollTop: aTag.offset().top}, 2000);
}


$(document).ready((e)=>{

  $('#logo_img').hover(function(){
    $('.nav-item').css("width", "100px");
  }, function(){
    $('.nav-item').css("width", "0px");
  })

  // document.querySelectorAll('.nav-icon').forEach(function(item){
  //   console.log('click');
  //   item.addEventListener('click',(e)=>{
  //     let target = e.currentTarget.target;
  //     scrollToAnchor(target);
  //     console.log(target);
  //   })
  // })
  $(document).on('click', 'a[href^="#"].nav-icon', function(e) {
    // target element id
    var id = $(this).attr('href');
    console.log();
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
  
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
  
    // top position relative to the document
    document
      .getElementById(id.substring(1))
      .scrollIntoView({ behavior: "smooth" });
  });
  
})




