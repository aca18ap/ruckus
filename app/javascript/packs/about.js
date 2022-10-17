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

fetch('https://api.unsplash.com/photos/random/?count=5&client_id=52d8369eb3e2576a5f5b6423865e074e9c7045761bff1ac5664ff3e0bdb57a1d') 
  .then(response => response.json())
  .then(data => {
    data.forEaach(function(image, i) {
      document.querySelector("#slide-" + (i+1)).innerHTML = `
        <img src="${image.urls.regular}" alt="">
        <p class="author-info">
          <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
        </p>
      `;
    });
  });