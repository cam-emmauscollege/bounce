var x = 50;
var y = 50;
var speedX = 2;
var speedY = 5;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x, y, 80, 80);

  //positie updaten
  x = x + speedX;
  y = y + speedY;

  // laat stuiteren tegen de onderkant
  if (y === 720) {
    speedY = speedY * -1;
  }
}