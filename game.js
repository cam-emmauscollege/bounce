class Game {
  // globale attributen
  ballen;
  
  constructor () {
    this.ballen = [];
  }

  /**
   * setup
   * de code in deze functie wordt één keer uitgevoerd door
   * de p5 library, zodra het spel geladen is in de browser
   */
  setup () {
    // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
    createCanvas(1280, 720);

    // maak 25 ballen en voeg ze toe aan de array 'ballen'
    for (var i = 0; i < 25; i++) {
      // maak random waarden
      var randomx = random(50, 1230);
      var randomy = random(50, 670);
      var randomSpeedX = random (-5, 5);
      var randomSpeedY = random (-5, 5);

      // maak een nieuwe bal met de verkregen random waarden.
      var bal = new Bal(randomx, randomy, randomSpeedX, randomSpeedY);

      // voeg deze nieuwe bal toe aan de array 'ballen'
      this.ballen.push(bal);
    }

    // maak (officieel: instantieer) een superbal en voeg deze ook 
    // toe aan de array 'ballen'.
    var superbal = new Superbal(400, 300, 10, 10);
    this.ballen.push(superbal);

    // zelfde voor een nummerbal, maar dan in één regel
    this.ballen.push(new NummerBal(200, 500, 8, -5, 8));
  }


  /**
   * draw
   * de code in deze functie wordt meerdere keren per seconde
   * uitgevoerd door de p5 library, nadat de setup functie klaar is
   */
  draw() {
    // Kleur de achtergrond blauw, zodat je het kunt zien
    background('blue');

    // ga alle ballen in de array af en:
    // 1. laat ze zich tonen
    // 2. laat ze hun positie en snelheid updaten
    for(var i = 0; i < this.ballen.length; i++) {
      this.ballen[i].show();
      this.ballen[i].update();
    }
  }
}