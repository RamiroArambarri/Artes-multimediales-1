/*
Proyección inspirada en el cuadro "The large figure paintings, nr 5" de Hilma Af Klint. Link al cuadro:
https://i0.wp.com/moovemag.com/wp-content/uploads/2022/10/hilma-af-klint-1907-the-key-to-the-work-up-to-this-point.jpg?fit=700%2C874&ssl=1
*/

function setup() {
    createCanvas(400, 400);
  }
  
  let r; //Distancia del cursor al corazón
  let despierto = false;
  let mouseIsPressed_antes = false; //valor de mouseIsPressed un frame antes
  let theta1 = 0; //Ángulo de rotación de la cadena de círculos
  
  function draw() {
    background(218, 179, 213);
  
    //Botón corazón
    if (
      mouseIsPressed == true &&
      mouseIsPressed_antes == false &&
      r < 55 &&
      despierto == false
    ) {
      despierto = true;
    } else if (
      mouseIsPressed == true &&
      mouseIsPressed_antes == false &&
      r < 55 &&
      despierto == true
    ) {
      despierto = false;
    }
  
    //Figura gris de fondo
    push();
    noStroke();
    colorMode(HSB);
    fill((despierto * (mouseX + mouseY)) % 360, 5 * despierto, 94);
    ellipse(200, 100, 300 + despierto * 20 * sin(frameCount / 15), 300);
    ellipse(200, 300, 300 + despierto * 20 * sin(frameCount / 15 + PI / 2), 300);
    pop();
  
    //Elipse gris claro
    push();
    noStroke();
    fill(200);
    translate(133, 63);
    rotate((despierto * frameCount) / 3);
    translate(7, 7);
    rotate((-despierto * frameCount) / 3);
    ellipse(0, 0, 120, 100);
    pop();
  
    //Elipse blanca
    noFill();
    stroke(255);
    strokeWeight(5);
    ellipse(230, 110, 120 - (despierto * mouseY) / 5, 100);
  
    //Elipse azul
    push();
    colorMode(HSB, 360, 100, 100);
    fill((184 + 3 * despierto * frameCount) % 360, 51, 67);
    strokeWeight(1);
    ellipse(140, 310, 130, 150);
    pop();
  
    //Elipse gris oscuro
    strokeWeight(1);
    fill(100);
    ellipse(200, 300, 200 - (despierto * mouseY) / 3, 130);
  
    //Elipse naranja alejada
    push();
    colorMode(HSB, 360, 100, 100);
    fill((43 + 2 * despierto * frameCount) % 360, 62, 92);
    strokeWeight(1);
    stroke(255);
    ellipse(270, 80, 120, 100);
    pop();
  
    //Calculo de la rotación de la cadena de circulitos
    if (despierto == true && mouseX <= 200) {
      theta1 = atan((40 - mouseY) / (200 - mouseX)) + PI / 2;
    } else if (despierto == true && mouseX > 200)
      theta1 = atan((40 - mouseY) / (200 - mouseX)) - PI / 2;
    else theta1 = -PI / 4;
  
    //Circulitos
    push();
    translate(200, 40);
    rotate(theta1);
    fill(50, 163, 170);
    ellipse(0, 0, 20, 20);
    ellipse(0, 20, 20, 20);
    ellipse(0, 40, 20, 20);
    ellipse(0, 60, 20, 20);
    pop();
  
    //Lineas blancas
    fill(255);
    rect(250 + ((mouseX - 200) * despierto) / 30, 0, 6, 400);
    rect(150 + ((mouseX - 200) * despierto) / 30, 0, 6, 400);
    rect(150 + ((mouseX - 200) * despierto) / 30, 220, 100, 6);
  
    //Elipses naranjas
    fill(235, 192, 80);
    strokeWeight(2);
    stroke(255);
    ellipse(150, 150 + 5 * sin((despierto * frameCount) / 4), 100, 120);
    ellipse(150, 150 + 5 * sin((despierto * frameCount) / 4 + 1), 70, 90);
    ellipse(150, 150 + 5 * sin((despierto * frameCount) / 4 + 2), 40, 60);
  
    r = sqrt((sq(mouseX - 200) + sq(mouseY - 250)) ^ 2);
  
    //Circulos verdes palpitantes
    noFill();
    strokeWeight(3);
    stroke(161, 204, 154);
    ellipse(
      200,
      250,
      200 + 5 * sin(((despierto + 1) * frameCount) / 6),
      200 + 5 * sin(((despierto + 1) * frameCount) / 6)
    );
    ellipse(
      200,
      250,
      150 + 5 * sin(((despierto + 1) * frameCount) / 6 + 1),
      150 + 5 * sin(((despierto + 1) * frameCount) / 6 + 1)
    );
    ellipse(
      200,
      250,
      100 + 5 * sin(((despierto + 1) * frameCount) / 6 + 2),
      100 + 5 * sin(((despierto + 1) * frameCount) / 6 + 2)
    );
  
    if (r >= 35) {
      fill(161, 204, 154, 270 - r);
      ellipse(
        200,
        250,
        50 + 5 * sin(((despierto + 1) * frameCount) / 6 + 3),
        50 + 5 * sin(((despierto + 1) * frameCount) / 6 + 3)
      );
    } else {
      fill(235, 192, 80);
      ellipse(
        200,
        250,
        50 + 5 * sin(((despierto + 1) * frameCount) / 6 + 3),
        50 + 5 * sin(((despierto + 1) * frameCount) / 6 + 3)
      );
    }
  
    let theta;
  
    //Cálculo de la rotación de los círculos celestes
    if (mouseX <= 270) {
      theta2 = despierto * atan((280 - mouseY) / (270 - mouseX));
    } else {
      theta2 = despierto * (atan((280 - mouseY) / (270 - mouseX)) + PI);
    }
  
    //Circulos celestes
    translate(270, 280);
    rotate(theta2);
    push();
    fill(208, 230, 231);
    strokeWeight(2);
    stroke(218, 179, 213);
    ellipse(0, 0, 120, 120);
    ellipse(-15, 0, 90, 90);
    ellipse(-30, 0, 60, 60);
    ellipse(-45, 0, 30, 30);
    pop();
  
    //Valor de mouseIsPressed_antes
    if (mouseIsPressed == true) {
      mouseIsPressed_antes = true;
    } else {
      mouseIsPressed_antes = false;
    }
  }
  