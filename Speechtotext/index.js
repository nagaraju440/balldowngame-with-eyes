var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
canvas.width=400;
canvas.height=window.innerHeight;
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
        case 39 :
            // this.dy=0
            this.da=scale*1;
            break;
        case 37 :
            // this.dy=0;
            this.da=-scale*1;
            break;
               
    }
} 
this.updown=function(w){
    switch(w){
       
        case 39 :
            // this.dy=0
            this.da=0;
            break;
        case 37 :
            // this.dy=0;
            this.da=0;
            break;
               
    }
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
var req=setInterval(animate1,100)

// function animate2(){
//     // c.clearRect(0,0,innerWidth,innerHeight);
    
//     for(var i=0;i<6;i++){
       
//         array2[i].update2();
//         array2[i].draw();
      
//     }
  
// }
// setInterval(animate2,100)

// function animate3(){
//     // c.clearRect(0,0,innerWidth,innerHeight);
    
//     for(var i=0;i<6;i++){
       
      
      
//     }
  
// }
// setInterval(animate3,100)



document.addEventListener("keydown",function keycode(event){    

    var z =event.which || event.keyCode;
    // console.log("down");
    ball.down(z);
})
document.addEventListener("keyup",function keycode(event){    

    var w =event.which || event.keyCode;
    // console.log("up");
    ball.updown(w);
})
// const img = document.getElementById('img');

// // Load the model.
// cocoSsd.load().then(model => {
//   // detect objects in the image.
//   model.detect(img).then(predictions => {
//     console.log('Predictions: ', predictions);
//   });
// });

// function hello(){
//     document.getElementById("canvas").style.display="none";

// }
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function runSpeechRecognition() {
    console.log("start listening")
    // get output div reference
    // var output = document.getElementById("output");
    // get action element reference
    // var action = document.getElementById("action");
    // new speech recognition object
    
    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        // action.innerHTML = "<small>listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        // action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        console.log("you speakkk",transcript)
        runSpeechRecognition()
        // output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
        // output.classList.remove("hide");
    };
  
     // start recognition
     recognition.start();


}
runSpeechRecognition()