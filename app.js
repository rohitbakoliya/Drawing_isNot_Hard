const canvas = document.getElementById('cvx');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#ffc600';
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

ctx.lineWidth=20

let isDrawing = false;
let lastX =0
let lastY =0
let direction = false
let hue=0;
let lineWidth=.1
function draw(e)
{
    if(!isDrawing)
    return;
    // console.log(e);
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = `hsl(${hue} , 100% , 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX , lastY)
    ctx.lineTo(e.offsetX , e.offsetY)
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    if(hue > 360){
        hue = 0;
    }
    hue++
    if(Math.floor(lineWidth)>50 || Math.floor(lineWidth)<0){
        direction = !direction
    }
    if(direction){
        lineWidth = lineWidth + .1 ;
        // console.log('if')
    }else{
        lineWidth = lineWidth - .1;
        // console.log('else')
    }
    
}

canvas.addEventListener('mousemove' , draw);
canvas.addEventListener('mousedown' ,
    (e)=> {isDrawing = true
         lastX = e.offsetX;
         lastY = e.offsetY; 
    }
)
canvas.addEventListener('mouseup' , ()=> isDrawing = false)
canvas.addEventListener('mouseout' , ()=> isDrawing=false)