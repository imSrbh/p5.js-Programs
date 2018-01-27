//Saurabh Kumar Singh
//16100051



var speed1=0,speed2=5;
var x1=140,y1=5;
var x2=0,y2=5;

var X1 = 280; var Y1 = 5;
function setup() {
  createCanvas(windowHeight,windowWidth);
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
  stroke(0);
  fill(255);

  rect(x1, y1, 10, 10);
  ellipse(X1, Y1, 10, 10);

  move();
  move_2();
  // move(X1, Y1);
  // console.log(mouseX, mouseY);
}

function move() {
  x1+=speed1;
  y1+=speed2;
  //console.log(x1);

  if(y1 == 140 && speed2 != 0){
  //  console.log("I am working");
    var k= int(random(0,3.2));
    print(k);

    if(k==0){ //right
      speed1=5;
      speed2=0;
    }

    else if(k==1){ //left
      speed1=-5;
      speed2=0;
    }

    else if(k==2){ //down
      speed1=0;
      speed2=5;
    }

    else if(k==3){ //up
      speed1=0;
      speed2=-5;
    }
  }
  if(x1 >= 545 && y1 <= 545) {
    x1=x1;
    speed1 = 0;
    speed2 = 5;
  }
  else if(x1 <= 5 && y1 >= 545) {
    x1=x1;
    speed1 = 0;
    speed2 = -5;
  }
  else if(y1 >= 545) {
    y1=y1;
    speed1 = -5;
    speed2 = 0;
  }
  else if(y1 <= 5){
    y1 = y1;
    speed1 = 5;
    speed2 = 0;
    // speed2 = -5;
  }

}

function move_2() {
  X1+=speed1;
  Y1+=speed2;

  if(Y1 == 280 && speed2 != 0){
    //console.log("I am working");
    var k= int(random(0,3.2));
    print(k);

    if(k==0){ //right
      speed1=5;
      speed2=0;
    }

    else if(k==1){ //left
      speed1=-5;
      speed2=0;
    }

    else if(k==2){ //down
      speed1=0;
      speed2=5;
    }

    else if(k==3){ //up
      speed1=0;
      speed2=-5;
    }
  }
  if(X1 >= 545 && Y1 <= 545) {
    X1=X1;
    speed1 = 0;
    speed2 = 5;
  }
  else if(X1 <= 5 && Y1 >= 5) {
    X1=X1;
    speed1 = 0;
    speed2 = -5;
  }
  else if(Y1 >= 545) {
    Y1=Y1;
    speed1 = -5;
    speed2 = 0;
  }
  else if(y1 <= 5){
    Y1 = Y1;
    speed1 = 5;
    speed2 = 0;
    // speed2 = -5;
  }


}
