class Superbal extends Bal {

  // toont de bal
  show() {
    // kies elke keer dat de bal getekend word een
    // nieuwe random kleur en teken de bal.
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x, this.y, 50, 50);
  }

}