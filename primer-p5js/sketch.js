/*
Proyección inspirada en el cuadro "The large figure paintings, nr 5" de Hilma Af Klint. Link al cuadro:
https://i0.wp.com/moovemag.com/wp-content/uploads/2022/10/hilma-af-klint-1907-the-key-to-the-work-up-to-this-point.jpg?fit=700%2C874&ssl=1
*/

function setup() {
    createCanvas(400, 400);
    background(218, 179, 213);
  
    //Figura gris de fondo
    noStroke();
    fill(240);
    ellipse(200, 100, 300, 300);
    ellipse(200, 300, 300, 300);
  
    //Elipse gris claro
    fill(200);
    ellipse(140, 70, 120, 100);
  
    //Elipse blanca
    noFill();
    stroke(255);
    strokeWeight(5);
    ellipse(230, 110, 120, 100);
  
    //Elipse azul
    fill(50, 163, 170);
    strokeWeight(1);
    ellipse(140, 310, 130, 150);
  
    //Elipse gris oscuro
    fill(100);
    ellipse(200, 300, 200, 130);
  
  
  
    //Elipse naranja alejada
    fill(235, 192, 80);
    strokeWeight(1);
    stroke(255);
    ellipse(270, 80, 120, 100);
  
    //Circulitos
    fill(50, 163, 170);
    ellipse(200, 40, 20, 20);
    ellipse(215, 55, 20, 20);
    ellipse(230, 70, 20, 20);
    ellipse(245, 85, 20, 20);
  
    //Lineas blancas
    fill(255);
    rect(250, 0, 6, 400);
    rect(150, 0, 6, 400);
    rect(150, 220, 100, 6);
  
    //Elipses naranjas
    fill(235, 192, 80);
    strokeWeight(2);
    stroke(255);
    ellipse(150, 150, 100, 120);
    ellipse(150, 150, 70, 90);
    ellipse(150, 150, 40, 60);
  
  
    //Circulos verdes
    noFill();
    strokeWeight(3);
    stroke(161, 204, 154);
    ellipse(200, 250, 200 , 200);
    ellipse(200, 250, 150, 150);
    ellipse(200, 250, 100, 100);
    ellipse(200, 250, 50, 50);
    
  
    //Circulos celestes
    fill(208, 230, 231);
    strokeWeight(2);
    stroke(218, 179, 213);
    ellipse(270, 280, 120, 120);
    ellipse(255, 280, 90, 90);
    ellipse(240, 280, 60, 60);
    ellipse(225, 280, 30, 30);
  
  }
  