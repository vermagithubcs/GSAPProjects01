var circle = document.querySelector("#circle");
var frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;
frames.forEach(frame => {
    frame.addEventListener("mousemove",function(dots){
        let dims = frame.getBoundingClientRect();
    
        let xStart = dims.x;
    
        let xEnd = dims.x + dims.width; 
    
        let zeroone = gsap.utils.mapRange(xStart,xEnd,0,1,dots.clientX);
    
        gsap.to(circle,{
            scale:7
        })
        gsap.to(frame.children,{
            y:"-5vw",
            color:"#fff"
        })
        gsap.to(frame.children,{
            x:lerp(-50,50,zeroone),
            duration:0.3,
        })
    })
    frame.addEventListener("mouseout",function(dots){
        gsap.to(circle,{
            scale:1,
        })
        gsap.to(frame.children,{
            color:"#222",
            y:"0vw",
        })
        gsap.to(frame.children,{
            x:0,
            duration:0.3,
        })
    })
})
// window.addEventListener("mousemove",function(dots){
//     circle.style.transform=`translate(${dots.clientX}px,${dots.clientY}px)`;
// })
window.addEventListener("mousemove",function(dots){
    gsap.to(circle,{
        x:dots.clientX,
        y:dots.clientY,
        duration:0.1,
        ease:Expo,
    })
})
