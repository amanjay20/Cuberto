var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")

main.addEventListener("mousemove",function(run){
    gsap.to(cursor,{
        x:run.x,
        y:run.y,
        duration:1,
        ease:"elastic.out(1,0,3)"
    })
})