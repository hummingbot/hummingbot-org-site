export class Particle {
  constructor(PIXXI, stage, ticker, resources, x, y, directionX, directionY, size, color, specialParticleName, circleFillStyle, viewportWidth, viewportHeight) {
    this.PIXXI = PIXXI;
    this.stage = stage;
    this.ticker = ticker;
    this.resources = resources;
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.specialParticleName = specialParticleName;
    this.lineGraphics = new PIXXI.Graphics();
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
  }

  // draw particle
  draw() {

    if (this.specialParticleName && this.specialParticleName !== 'none') {
      let logo = new this.PIXXI.Sprite(this.resources[this.specialParticleName].texture)
      logo.anchor.set(0.5)
      logo.x = Math.random() * this.viewportWidth
      logo.y = Math.random() * this.viewportHeight
      this.pixi = logo
      this.stage.addChild(logo)
    } else {
      const calculatedStrokeWidth = this.size / 5
      const strokeWidth = calculatedStrokeWidth
      const pixi = new this.PIXXI.Graphics();
      pixi.lineStyle(strokeWidth, this.color, 1);
      pixi.beginFill(this.circleFillStyle, 1);
      pixi.drawCircle(0, 0, this.size);
      pixi.endFill();
      pixi.x = this.x
      pixi.y = this.y
      this.pixi = pixi
      this.stage.addChild(pixi)
    }
      
    this.ticker.add(this.update.bind(this));
  }

  update() {
    const outsideMargin = this.specialParticleName !== 'none' ? -300 : 0

    this.pixi.x += this.directionX/2
    this.pixi.y += this.directionY/2
    this.x = this.pixi.x
    this.y = this.pixi.y

    if(this.pixi.y > this.viewportHeight - this.size + outsideMargin) {
      if (this.directionY > 0) {
        this.directionY = -this.directionY
      }
    } else if (this.pixi.y < 0) {
      if (this.directionY < 0) {
        this.directionY = -this.directionY
      }
    }

    if(this.pixi.x > this.viewportWidth - this.size + outsideMargin) {
      if (this.directionX > 0) {
        this.directionX = -this.directionX
      }
    } else if (this.pixi.x < 0) {
      if (this.directionX < 0) {
        this.directionX = -this.directionX
      }
    }
  }
}
