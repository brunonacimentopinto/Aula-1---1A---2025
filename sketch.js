function setup() {
    createCanvas(400, 400);
  }
  //Função draw significa desenhar
  function draw() {
    background(139,0,0);
    // desenhando a linha superior 
    circle(50, 50, 100); //primeiro círculo 
    circle(150, 50, 100); //segundo círculo
    circle(350, 50, 100); //terceiro círculo
    circle(250, 50, 100); //quarto círculo
    
     // desenhando a linha inferior 
    circle(50, 350, 100); //primeiro círculo
    circle(150, 350, 100); //segundo círculo
    circle(350, 350, 100); //terceiro círculo
    circle(250, 350, 100); //quarto círculo
    
  }