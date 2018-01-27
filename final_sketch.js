//Saurabh Kumar Singh
//16100051



/*var speed1=0,speed2=5;
var x1=140,y1=5;
var x2=0,y2=5;
var X1 = 280; var Y1 = 5;*/


var m,n;
var speedm,speedn;
var k;

var p,q;
var l;

var r,s;
var t;
var g,h;
var o;

function setup() {
  createCanvas(800,800);
  m=10;
  n=10;
  speedm=5;
  speedn=0;
  
   m=140;n=0;
  speedm=5;speedn=0;
  p=420;q=0;
  speedp=0;speedq=5;
  r=280;s=560;
  speedr=5;speeds=0;
  g=560;h=280;
  speedg=-5;speedh=0;
  
}
function draw() {
  background(0);
  //line
  for( x=0;x<=width;x+=140)
    for( y=0;y<=height;y+=40)
    {
      stroke(255);
      line(x,y,x,y+10);
    }
  for( x=0;x<=width;x+=40)
    for( y=0;y<=height;y+=140)
    {
      stroke(255);
      line(x,y,x+10,y);
    }
  //rect
  for(var i=30;i<width;i+=140)
  {
    for(var j=30;j<height;j+=140)
    {
      fill(0,127,0)
      rect(i,j,80,80,10);
    }
  }
  stroke(255);
  fill(255);

   //For vehicles
  //car1
  ellipse(m,n,20,20);
  
  m+=speedm;
  n+=speedn;
  
  
  if((m==140 && n==140) ||(m==280 && n==140) || (m==420 && n==140) || (m==140 && n==280) ||(m==140 && n==280)||(m==140 && n==420) ||(m==280 && n==280) ||(m==420 && n==140)||(m==420 && n==420))
  {
    k=int(random (0,3.2));
    
    if(k===0) //forward
    {
      speedm=5;
      speedn=0;
    }
    else if(k==1) //left
    {
      speedm=0;
      speedn=-5;
    }
    else if(k==2) //right
    {
      speedm=0;
      speedn=5;
    }
    else if(k==3)  //back
    {
      speedm=-5;
      speedn=0;
    }
  }
  
  if(m==width || n==height || m===0 || n===0)
   {
     m=0;
     n=140;
     speedm=5;
     speedn=0;
   }
  

//car2

ellipse(p,q,20,20);
  
  p+=speedp;
  q+=speedq;
  
  
  if((m==140 && n==140) ||(m==280 && n==140) || (m==420 && n==140) || (m==140 && n==280) ||(m==140 && n==280)||(m==140 && n==420) ||(m==280 && n==280) ||(m==420 && n==140)||(m==420 && n==420))
  {
    k=int(random (0,3.2));
    
    if(k===0) //forward
    {
      speedp=5;
      speedq=0;
    }
    else if(k==1) //left
    {
      speedp=0;
      speedq=-5;
    }
    else if(k==2) //right
    {
      speedp=0;
      speedq=5;
    }
    else if(k==3)  //back
    {
      speedp=-5;
      speedq=0;
    }
  }
  
  if(p==width || q==height || p===0 || q===0)
   {
     p=420;
     q=0;
     speedp=0;
     speedq=5;
   }
   
   //car3
   ellipse(r,s,20,20);
  
  r+=speedr;
  s+=speeds;
  
  
  if((m==140 && n==140) ||(m==280 && n==140) || (m==420 && n==140) || (m==140 && n==280) ||(m==140 && n==280)||(m==140 && n==420) ||(m==280 && n==280) ||(m==420 && n==140)||(m==420 && n==420))
  {
    k=int(random (0,3.2));
    
    if(k===0) //forward
    {
      speedr=5;
      speeds=0;
    }
    else if(k==1) //left
    {
      speedr=0;
      speeds=-5;
    }
    else if(k==2) //right
    {
      speedr=0;
      speeds=5;
    }
    else if(k==3)  //back
    {
      speedr=-5;
      speeds=0;
    }
  }
  
  if(r==width || s==height || r===0 || s===0)
   {
     r=280;
     s=560;
     speedr=5;
     speeds=0;
   }
//car 4
  ellipse(g,h,20,20);
  
  g+=speedg;
  h+=speedh;
  
  
  if((m==140 && n==140) ||(m==280 && n==140) || (m==420 && n==140) || (m==140 && n==280) ||(m==140 && n==280)||(m==140 && n==420) ||(m==280 && n==280) ||(m==420 && n==140)||(m==420 && n==420))
  {
    k=int(random (0,3.2));
    
    if(k===0) //forward
    {
      speedg=5;
      speedh=0;
    }
    else if(k==1) //left
    {
      speedg=0;
      speedh=-5;
    }
    else if(k==2) //gight
    {
      speedg=0;
      speedh=5;
    }
    else if(k==3)  //back
    {
      speedg=-5;
      speedh=0;
    }
  }
  
  if(g==width || h==height || g===0 || h===0)
   {
     g=560;
     h=280;
     speedg=-5;
     speedh=0;
   }
}