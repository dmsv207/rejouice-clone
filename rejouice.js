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

function smoothscrolling(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
smoothscrolling()






























