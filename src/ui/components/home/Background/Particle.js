export class Particle {
  constructor(PIXXI, stage, ticker, x, y, alpha, texture, orientation, direction, particleSpeed, size, viewportWidth, viewportHeight) {
    this.PIXXI = PIXXI;
    this.stage = stage;
    this.ticker = ticker;
    this.x = x;
    this.y = y;
    this.particleSpeed = particleSpeed;
    this.size = size;
    this.lineGraphics = new PIXXI.Graphics();
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
    this.texture = texture;
    this.orientation = orientation;
    this.direction = direction;
    this.alpha = alpha;
  }

  draw() {
    const instance = new this.PIXXI.Graphics();
    if (this.orientation === 'vertical') {
      instance.beginTextureFill({texture: this.texture, alpha: this.alpha})
      .drawRect(0, 0, 2, 53);
    } else {
      instance.beginTextureFill({texture: this.texture, alpha: this.alpha})
      .drawRect(0, 0, 53, 2);
    }
    instance.endFill()
    instance.x = this.x
    instance.y = this.y
    this.instance = instance
    this.stage.addChild(instance)
    this.ticker.add(this.update.bind(this));
  }

  update() {
    if (this.orientation === 'vertical') {
      this.instance.y += this.particleSpeed
      if (this.direction === 'Positive' && this.instance.y > this.viewportHeight) {
        this.instance.y = 0
        this.instance.x = Math.round(Math.random() * this.viewportWidth)
      }
      if (this.direction === 'Negative' && this.instance.y < 0) {
        this.instance.y = this.viewportHeight
        this.instance.x = Math.round(Math.random() * this.viewportWidth)
      }
    } else {
      this.instance.x += this.particleSpeed
      if (this.direction === 'Positive' && this.instance.x > this.viewportWidth) {
        this.instance.x = 0
        this.instance.y = Math.round(Math.random() * this.viewportHeight)
      }
      if (this.direction === 'Negative' && this.instance.x < 0) {
        this.instance.x = this.viewportWidth
        this.instance.y = Math.round(Math.random() * this.viewportHeight)
      }
    }
  }
}
