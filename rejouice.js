function cursoreffect(){
    var page1Content=document.querySelector("#page-1content")
var cursor=document.querySelector("#cursor")


page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        delay: 0.1,
        duration:0.5
    })
}
)


page1Content.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
        scale: 1,
        opacity:1
    });
});

page1Content.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        scale: 0,
        opacity:0
    });
});
}

cursoreffect()


function page2animation(){
    document.addEventListener('DOMContentLoaded', function() {
        // Select all elements with the class 'elem'
        const elements = document.querySelectorAll('.elem');
      
        // Define the options for Typed.js
        const typeSpeed = 50; // Typing speed in milliseconds
        const startDelay = 1000; // Delay before typing starts in milliseconds
        const staggerDelay = 500; // Delay between each element's typing animation start in milliseconds
      
        // Loop through each element and initialize Typed.js with a staggered delay
        elements.forEach((element, index) => {
          // Capture the existing content of the element
          const existingContent = element.innerHTML;
      
          // Clear the content of the element
          element.innerHTML = '';
      
          // Define the options for Typed.js, using the captured content
          const options = {
            strings: [existingContent],
            typeSpeed: typeSpeed,
            startDelay: startDelay + (index * staggerDelay) // Add stagger delay to start delay
          };
      
          // Initialize Typed.js on the element
          new Typed(element, options);
        });
      });
}
page2animation()

  






























