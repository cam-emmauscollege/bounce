class NummerBal extends Bal {
  nummer;

  constructor(_x, _y, _speedX, _speedY, _nummer) {
    // roep de constructor van de superclass aan
    // deze stelt de geërfde attributen in
    super(_x, _y, _speedX, _speedY);

    // het attribuut 'nummer' het eigene van deze class
    // die moeten we dus zelf managen.
    this.nummer = _nummer;
  }

  show() {
    // laat de superclass de 'gewone bal' tekenen
    // voordat wij er nog iets bovenop tekenen
    // het is niet nodig om die bestaande functionaliteit
    // te 'kopiëren'
    super.show();

    // teken een kleinere witte cirkel op de gewone bal
    fill(255, 255, 255)
    ellipse(this.x, this.y, 30, 30);

    // teken this.nummer met zwarte tekst midden op
    // de bal met de witte middencirkel
    fill(0, 0, 0);
    textSize(24);
    text(this.nummer, this.x-5, this.y+5);
  }
  





  
}