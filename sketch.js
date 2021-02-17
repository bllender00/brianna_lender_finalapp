var gui;
var x = 10;
var y = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  d1 = select('.info_light');
  d1.position(0,0);

  d2 = select('.info_dark');
  d2.position(0,0);

  gui = new Gui();
  let gui_setup = new dat.GUI();
  gui_setup.add(gui, 'Speed', 0, 10).step(1);
  gui_setup.add(gui, 'Tail_Length', -100, -10).step(1);
  gui_setup.add(gui, 'Tail_Width', 1, 10).step(1);
  gui_setup.add(gui, 'Radius_1', 2, 10).step(1);
  gui_setup.add(gui, 'Radius_2', 1, 30).step(1);
  gui_setup.add(gui, 'Points', 4, 10).step(1);
  gui_setup.add(gui, 'Description_Light').onChange(description1);
  gui_setup.add(gui, 'Description_Dark').onChange(description2);
  gui_setup.addColor(gui,'Stars');
  gui_setup.addColor(gui,'Tail_Color');
  gui_setup.addColor(gui,'Background');
} //setup


function draw() {
  stroke(220);
  background(gui.Background);
  stripes(x, y, x + gui.Tail_Length, y + gui.Tail_Length);
  stars(x, y, x + gui.Tail_Length, y + gui.Tail_Length);
      x = x + gui.Speed;
      if (x > windowHeight*1.5) {
        x = -200;
      }
      y = y + gui.Speed;
      if (y > windowHeight*1.5) {
        y = -200;
      }
} //draw


function stripes(startX, startY, endX, endY) {
  strokeWeight(gui.Tail_Width);
  stroke(gui.Tail_Color);
  
  i = 50;
  
  line(startX, startY, endX, endY);
  line(startX-i*0.5, startY-i*4.5, endX-i*0.5, endY-i*4.5);

    line(startX+i*5, startY-i, endX+i*5, endY-i);
    line(startX-i*5, startY-i, endX-i*5, endY-i);

    line(startX+i*3, startY+i, endX+i*3, endY+i);
    line(startX+i*2.5, startY-i*4.5, endX+i*2.5, endY-i*4.5);

    line(startX-i, startY+i*5, endX-i, endY+i*5);
    line(startX-i, startY+i*5, endX-i, endY+i*5);

    line(startX, startY+i*2, endX, endY+i*2);
    line(startX, startY+i*2, endX, endY+i*2);

    line(startX-i*5, startY+i*3.5, endX-i*5, endY+i*3.5);
    line(startX-i*5, startY+i*3.5, endX-i*5, endY+i*3.5);

    line(startX+i*3, startY+i*3, endX+i*3, endY+i*3);
    line(startX-i*5.4, startY+i*1.5, endX-i*5.4, endY+i*1.5);

    line(startX-i*2.5, startY+i*2, endX-i*2.5, endY+i*2);
    line(startX-i*2.5, startY+i*2, endX-i*2.5, endY+i*2);

    line(startX+i*2.5, startY-i*2, endX+i*2.5, endY-i*2);
    line(startX-i*2.5, startY-i*2, endX-i*2.5, endY-i*2);

    line(startX+i*4.5, startY-i*3, endX+i*4.5, endY-i*3);
    line(startX-i*4.5, startY-i*3, endX-i*4.5, endY-i*3);
}

function stars(startX, startY, endX, endY){
  stroke(gui.Background);
  fill(gui.Stars);
  star(startX, startY, gui.Radius_1, gui.Radius_2, gui.Points );
  star(startX-i*0.5, startY-i*4.5, gui.Radius_1, gui.Radius_2, gui.Points );

    star(startX+i*5, startY-i, gui.Radius_1, gui.Radius_2, gui.Points );
    star(startX-i*5, startY-i, gui.Radius_1, gui.Radius_2, gui.Points );

    star(startX+i*3, startY+i, gui.Radius_1, gui.Radius_2, gui.Points );
    star(startX+i*2.5, startY-i*4.5, gui.Radius_1, gui.Radius_2, gui.Points );

    star(startX-i, startY+i*5, gui.Radius_1, gui.Radius_2, gui.Points );
    star(startX-i, startY+i*5, gui.Radius_1, gui.Radius_2, gui.Points );

    star(startX, startY+i*2, gui.Radius_1, gui.Radius_2, gui.Points);
    star(startX, startY+i*2, gui.Radius_1, gui.Radius_2, gui.Points);

    star(startX-i*5, startY+i*3.5, gui.Radius_1, gui.Radius_2, gui.Points );
    star(startX-i*5, startY+i*3.5, gui.Radius_1, gui.Radius_2, gui.Points );

    star(startX+i*3, startY+i*3, gui.Radius_1, gui.Radius_2, gui.Points );
    star(startX-i*5.4, startY+i*1.5, gui.Radius_1, gui.Radius_2, gui.Points );

    star(startX-i*2.5, startY+i*2, gui.Radius_1, gui.Radius_2, gui.Points );
    star(startX-i*2.5, startY+i*2, gui.Radius_1, gui.Radius_2, gui.Points );

    star(startX+i*2.5, startY-i*2, gui.Radius_1, gui.Radius_2, gui.Points );
    star(startX-i*2.5, startY-i*2, gui.Radius_1, gui.Radius_2, gui.Points );

    star(startX+i*4.5, startY-i*3, gui.Radius_1, gui.Radius_2, gui.Points );
    star(startX-i*4.5, startY-i*3, gui.Radius_1, gui.Radius_2, gui.Points );
}

function star(x, y, Radius_1, Radius_2, npoints) {
  strokeWeight(2);
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * Radius_2;
    let sy = y + sin(a) * Radius_2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * Radius_1;
    sy = y + sin(a + halfAngle) * Radius_1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function Gui() {
  this.Speed = 2;
  this.Tail_Length = -40;
  this.Tail_Width = 3;
  this.Radius_1 = 6;
  this.Radius_2 = 20;
  this.Points = 4;
  this.Description_Light = true;
  this.Description_Dark = false;
  this.Stars = '#e8ca00';
  this.Tail_Color = '#ffffff';
  this.Background = '#272727';
}

function description1(){
  if(gui.Description_Light){
    d1.style('display','block');
  } else {
    d1.style('display','none');
  }
}

function description2(){
  if(gui.Description_Dark){
    d2.style('display','block');
  } else {
    d2.style('display','none');
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} //resize