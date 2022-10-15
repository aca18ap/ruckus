/* window.onload = function(){
    let navbar = $('#logo');
    
    // Get the offset position of the navbar
    let sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {

    window.onscroll = function() {myFunction()};

    // Get the navbar
    
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
} */

$('document').ready(function(event) {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    let height= screen.height;
    let c = document.body.scrollHeight + 1000;
    
    let logo = document.getElementById('logo');
    console.log(logo.style)
    function doSomething(scrollPos) {
        
        let newPos = Math.floor(scrollPos + (scrollPos/(c)) * height);
        logo.style.top = newPos + 'px';
    }
    
    document.addEventListener('scroll', (e) => {
      lastKnownScrollPosition = window.scrollY;
    
      if (!ticking) {
        window.requestAnimationFrame(() => {
          doSomething(lastKnownScrollPosition);
          ticking = false;
        });
    
        ticking = true;
      }
    });

});

