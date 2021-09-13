class Bal {
  x;
  y;
  speedX;
  speedY;

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.speedX = 3;
    this.speedY = -4;
  }

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

  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 50, 50);
  }
}