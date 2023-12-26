var tl = gsap.timeline();

function time(){
    var a = 0;
    setInterval(function(){
        a += Math.floor(Math.random()*20);
        if(a < 100)
        {
            document.querySelector("#loder h1").innerHTML = a+"%";
        }
        else{
            a = 100;
            document.querySelector("#loder h1").innerHTML = a+"%";
        }
    },120)
}

tl.to("#loder h1",{
    scale: 1.1,
    delay:0.5,
    duration:1,
    onStart: time()
})

tl.to("#loder",{
    top:"-100vh",
    delay:0.5,
    duration:2
})

tl.to("#page1 h1",{
    transform: "translateX(-100%)",
    fontWeight: "100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        //markers:true,
        start: "top 0",
        end: "end -200%",
        scrub: 4,
        pin:true
    }
})