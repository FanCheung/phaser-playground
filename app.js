var context = cv2.getContext("2d");
let fill, stroke;
fill = "blue";
stroke = "red";
context.strokeStyle = stroke;
context.fillStyle = fill;
context.beginPath()
context.moveTo(0, 0)
context.rotate(Math.PI * 45 / 180)

function degree(value) {
    return Math.PI * value / 180
}

cv2.addEventListener('mousemove', (e) => {
    obj = mousePos(e)
    console.log(obj)
    context.lineTo(obj.x, obj.y)
    context.stroke()
})

let mousePos = (e) => {
    // offsetX and offsetY equvilent the following 
    // algorithm which gives you the canvas coordinate
    return {
        x: e.clientX - e.target.offsetLeft,
        y: e.clientY - e.target.offsetTop,
    }
}

function text(c, text) {
    c.font = "20pt Arial";
    c.textBaseline = "top";
    c.fillText(text, 0, 0);
    c.strokeText(text, 0, 0);
}

function arc(c) {
    c.lineWidth = 2;
    c.arc(cv.height / 2, cv.width / 2, 20, 0, Math.PI * 2);
    c.stroke();
    c.fill();
}
function rect(c) {
    c.fillRect(100, 100, 200 * Math.random(), 200 * Math.random());
}

text(context, "write a text")
context.save()
context.fillStyle = "yellow"
arc(context)
context.restore()
rect(context)

console.log(cv.toDataURL('image/png',
    'high'))

function shape(context) {
    context.clearRect(0, 0, 200, 200);
    context.globalAlpha = 1;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, 200 * Math.random(), 200 * Math.random());

    context.fillStyle = "#ffffff";
    //context.font="20px Sans-Serif"
    context.textBaseline = "top";
    context.fillText(num, 0, 0);
    //console.log(window.requestAnimationFrame())
    //context.save()
    //context.restore()
}

function line(context) {
    context.fillStyle = "blue";
    context.strokeStyle = "red";
}

//setInterval(() => drawIt(Math.random()), 1000);
//var me=new Image()
//me.onload=()=>{ context.drawImage(me,100,100)  }
//me.src="http://www.allitebooks.com/wp-content/uploads/2017/10/Pro-HTML5-Games-2nd-Edition.jpg"
c2 = cv2.getContext("2d");
c2.strokeStyle = "red";
c2.lineWidth = 10;
c2.lineCap = "round";
c2.beginPath();
c2.moveTo(0, 0);
c2.lineTo(20, 20);
c2.arc(100, 100, 20, 0, Math.PI * 2);
c2.stroke();
c2.closePath();
function fillGradient(){
    var gr = context.createLinearGradient(0, 0, 100, 0);
    // Add the color stops.
    gr.addColorStop(0,'rgb(255,0,0)');
    gr.addColorStop(.5,'rgb(0,255,0)');
    gr.addColorStop(1,'rgb(255,0,0)');
}