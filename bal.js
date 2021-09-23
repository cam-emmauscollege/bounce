class Bal {
  // declareer de attributen van deze class
  x;
  y;
  speedX;
  speedY;

  // constructor 'maakt' een nieuw object
  // dit wordt aangeroepen als je 'new Bal' gebruikt.
  // de benodigde waarden voor een nieuwe
  // bal worden hieraan meegegeven en vervolgens
  // in attributen gestopt.
  constructor(newX, newY, _speedX, _speedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = _speedX;
    this.speedY = _speedY;
  }

  // update de positie van de bal en klapt bij
  // de kant de snelheid om
  update() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    if (this.x <=0 || this.x >= 1280) {
      this.speedX = this.speedX * -1;
    }
    if (this.y <=0 || this.y >= 720) {
      this.speedY = this.speedY * -1;
    }
  }

  // toont de bal
  show() {
    // kleur wordt rood
    fill(255, 0, 0);
    
    // teken de bal met als middelpunt de x- en y-waarde
    ellipse(this.x, this.y, 50, 50);
  }
}