





var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
canvas.width=400;
canvas.height=window.innerHeight-30;
var z=0,t=0;
var g=0,o=0;
var b=[];
var a,b,d=0,l=0;
var f1,e1,e2,f2,e3,f3;
var scale=10;
function Circle(x,y,dx,dy,w){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.a=a;
    this.b=b;
    this.w=w;
    this.radius=15;
    this.a=x;
    this.b=y;
    this.da=dx;
    this.db=dy;
    this.s=this.b;
    // this.color=col;
    this.update1=function(){
      
    //    console.log(d)
        if( this.y < 0 ){
            // this.dy=-this.dy;
            // this.y=700
            t=t+1;
            document.getElementById('score').innerHTML="score:"+t;
        }
        this.x=this.x+this.dx;
        this.y=this.y-this.dy; 
       e1=this.w;
       f1=this.y;
   
}
this.update2=function(){
      
       
    if( this.y < 0 ){
        // this.dy=-this.dy;
        this.y=700
    }
    this.x=this.x+this.dx;
    this.y=this.y-this.dy; 
   e2=this.x;
   f2=this.y;
//   console.log(this.y)
}  
 this.update3=function(){
      
       
    // if( this.y < 0 ){
    //     // this.dy=-this.dy;
    //     this.y=700
    // }
    
    this.x=this.x+this.dx;
    this.y=this.y-this.dy; 
   e3=this.x;
   f3=this.y;
//   console.log(this.y)
}

var color=["red","green","blue","orange","voilet","indigo","purple","pink","yellow"];
this.c=Math.floor(Math.random()*8);

    this.draw= function() {
           
             c.fillRect(this.x,this.y,this.w, 10);
             c.fillStyle=color[this.c];
         }

         

//for ball
this.ballupdate=function(){
           
    this.a=this.a+this.da;
    if(this.a<15){
        this.a=this.a+15
    }
    if(this.a>375){
        this.a=375
    }
    this.b=this.b+this.db; 
 }
 this.balldraw=function(i){
 
        // console.log(this.b,f1)

    
        if(this.b == f1&& this.a<e1+5){
                 l=i;
                 this.db=-10;
                //  f1=f1-20;
                this.b=this.b-20; 
           
       }
        
        else{ 
            this.db=10;

          
        }
        // console.log(this.b,f3)
        // console.log(this.a,e3)
        if(this.b ==f3 && this.a+5>e3 ){
            this.db=-10;
            this.b=this.b-20; 
                   
           
        }else{
            this.db=10;

        }
        
            c.arc(this.a,this.b,this.radius,0,2*Math.PI,false);
            c.stroke();
            c.fill();
            c.beginPath();
        if(this.b>window.innerHeight || this.b<0){
                clearInterval(req)
                document.getElementById('demo').innerHTML="over thammudu😜😜😜";
        }
 } 


 this.down=function(z){
    switch(z){
        case 65 :
            // this.dy=0
            this.da=scale*1;
            break;
        case 66 :
            // this.dy=0;
            this.da=-scale*1;
            break;
               
    }
} 
this.updown=function(w){
    switch(w){
       
        case 65 :
            // this.dy=0
            this.da=0;
            break;
        case 66 :
            // this.dy=0;
            this.da=0;
            break;
               
    }
}
this.left=function(){
    this.da=-scale*2;

} 
this.right=function(){
    this.da=scale*2;
}
this.normal=function(){
    this.da=0;
}



}

var  x=0,y=700;
dx=0,dy=10;
var array3=[];
var array1=[];
// var array2=[];
for(var i=0;i<600;i++){
    var g=(Math.floor(Math.random()*200)+100);
    var h=(Math.floor(Math.random()*180)+10);
    if(h<30){
        h=h+50;
    }
    var j=(Math.floor(Math.random()*180)+10);
// console.log(j)
if(j<50){
    j=j+50
}
    array1[i]=new Circle(0,y,dx,dy,h);
    // array2[i]=new Circle(150,y+g,dx,dy,100);
    array3[i]=new Circle(400-j,y+40,dx,dy,j);

     y=y+100;

}

var ball=new Circle(200,10,0,10,0);


function animate1(){
    c.clearRect(0,0,innerWidth,innerHeight);
    // requestAnimationFrame(animate1);
//    console.log("hii")
    for(var i=0;i<600;i++){ 
        array1[i].update1();
        array1[i].draw();
        array3[i].update3();
        array3[i].draw();
        ball.balldraw(i);
    }
    
    ball.ballupdate();
  
}


document.addEventListener("keydown",function keycode(event){    

    var z =event.which || event.keyCode;
    // console.log("down");
    console.log("some key is pressed")
    ball.down(z);
    
})
document.addEventListener("keyup",function keycode(event){    

    var w =event.which || event.keyCode;
    console.log("some key is released")
    // console.log("up");
    ball.updown(w);
})
function EuclideanDistance(p1,p2){
    var x1=p1.x,y1=p1.y;
    var x2=p2.x,y2=p2.y;
    var dist=Math.sqrt((x2-x1)**2+(y2-y1)**2)
    return dist;
}   
// ............................................................................face landmark code ....................................................
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvas.getContext('2d');

function onResults(results) {
//   canvasCtx.save();
//   canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//   canvasCtx.drawImage(
//       results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiFaceLandmarks) {
    for (const landmarks of results.multiFaceLandmarks) {
        
          //  ...................................Left eye........................................
          var l=Object.values(FACEMESH_LEFT_EYE)
          var ll={
            x:landmarks[Object.values(l)[0][0]].x*(1280),
            y:landmarks[Object.values(l)[0][1]].y*(720)
          }
          var lr={
            x:landmarks[Object.values(l)[15][0]].x*(1280),
            y:landmarks[Object.values(l)[15][1]].y*(720)
          }
          var lu={
            x:landmarks[Object.values(l)[12][0]].x*(1280),
            y:landmarks[Object.values(l)[12][1]].y*(720)
          }
          var ld={
            x:landmarks[Object.values(l)[4][0]].x*(1280),
            y:landmarks[Object.values(l)[4][1]].y*(720)
          }

        //    .x..................................right eye...........................

          var r=Object.values(FACEMESH_RIGHT_EYE)
          // console.log("r is",Object.values(r)[0])
          var rl={
            x:landmarks[Object.values(r)[0][0]].x*(1280),
            y:landmarks[Object.values(r)[0][1]].y*(720)
          }
          var rr={
            x:landmarks[Object.values(r)[15][0]].x*(1280),
            y:landmarks[Object.values(r)[15][1]].y*(720)
          }
          var ru={
            x:landmarks[Object.values(r)[12][0]].x*(1280),
            y:landmarks[Object.values(r)[12][1]].y*(720)
          }
          var rd={
            x:landmarks[Object.values(r)[4][0]].x*(1280),
            y:landmarks[Object.values(r)[4][1]].y*(720)
          }
        //   console.log(ll,lr,lu,ld)
        var rhd=EuclideanDistance(rl,rr);
        var rvd=EuclideanDistance(ru,rd)
        var lhd=EuclideanDistance(ll,lr);
        var lvd=EuclideanDistance(lu,ld);
        var rRatio=rhd/rvd;
        var lRatio=lhd/lvd;
        // console.log(lvd,rvd)
        // var ratio=(rRatio+lRatio)/2;
        ////////////////////one stratagy///////////////////////////////////
        //  if(lRatio>7 && rRatio>7){
        // // console.log("lration is",lRatio)
        // // console.log("r ratio is",rRatio)
        // if(lRatio>rRatio){
        //     ball.left()
        // }else{
        //     ball.right()
        // }
        // // ball.left()

        //  }else{
        //        ball.normal()
        // }

        // ..........................second stratagy...................................
    // if(  lvd<9 && rvd>6){
    //     console.log("going left brooooo")
    //         ball.left()
    // }else if(  rvd<6 && lvd>9){
    //     console.log("going right brooooo")
    //         ball.right()

    // }else{
    //     console.log("normal",lvd,rvd)
    //     ball.normal()
    // }

    // ...................................third stratagy.....................................
    // console.log(lRatio,rRatio)
    if(lRatio>10 && rRatio>5.3 && rRatio<10){
        console.log("left eye is closing")
        ball.left()
    }else  if(rRatio>10 && lRatio>5.3 && lRatio<10){
        console.log("right eye is closing")
        ball.right()
    }else{
        ball.normal()
    }
    //     // console.log("hiii andii")
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
    //                  {color: '#C0C0C070', lineWidth: 1});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {color: '#FF3030'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {color: '#FF3030'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, {color: '#FF3030'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {color: '#30FF30'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {color: '#30FF30'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, {color: '#30FF30'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, {color: '#E0E0E0'});
    //   drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, {color: '#E0E0E0'});
    }
  }
//   canvasCtx.restore();
}
const faceMesh = new FaceMesh({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
}});
faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

faceMesh.onResults(onResults);
console.log("video elment is",videoElement)
const camera = new Camera(videoElement, {
  onFrame: async () => {
      
    await faceMesh.send({image: videoElement});
  },
  width: 1280,
  height: 720
});

function hideContainer1(){
    console.log("clickign")
    document.getElementById("c1").style.display="none"
    document.getElementById("c2").style.display="block"
    var req;
camera.start().then(()=>{
 req=setInterval(animate1,100)
});

}