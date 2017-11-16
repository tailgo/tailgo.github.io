const TWO_PI = Math.PI * 2;
const DEFAULT_MAX_STEP = 10;
const DEFAULT_MAX_DISTANCE = 2.0;
const DEFAULT_EPSILON = 1e-6;

export default class Light2dCore {

  private ctx: CanvasRenderingContext2D;
  private w: number;
  private h: number;

  private n: number;
  private step: number;
  private distance: number;
  private epsilon: number;

  constructor(
    ctx: CanvasRenderingContext2D, w: number, h: number,
    n: number = 64,
    step: number = DEFAULT_MAX_STEP,
    distance: number = DEFAULT_MAX_DISTANCE,
    epsilon: number = DEFAULT_EPSILON
  ) {
    this.ctx = ctx;
    this.w = w;
    this.h = h;

    this.n = n;
    this.step = step;
    this.distance = distance;
    this.epsilon = epsilon;
  }

  public basic() {
    let p = 0;
    let imageData: ImageData = this.ctx.getImageData(0, 0, this.w, this.h);
    for (let y = 0; y < this.h; ++y) {
      for (let x = 0; x < this.w; ++x, p += 4) {
        imageData.data[p] =
          imageData.data[p + 1] =
          imageData.data[p + 2] =
          Math.floor(Math.min(this.sample(x / this.w, y / this.h) * 255, 255));
        imageData.data[p + 3] = 255;
      }
    }
    this.ctx.putImageData(imageData, 0, 0);
  }

  private sample(x: number, y: number): number {
    let sum = 0.0;
    for (let i = 0; i < this.n; ++i) {
      let a = TWO_PI * (i + Math.random()) / this.n;
      sum += this.trace(x, y, Math.cos(a), Math.sin(a));
    }
    return sum / this.n;
  }

  private trace(ox: number, oy: number, dx: number, dy: number): number {
    let t = 0.0;
    for (let i = 0; i < this.step && t < this.distance; ++i) {
      let sd = this.circleSDF(ox + dx * t, oy + dy * t, 0.5, 0.5, 0.1);
      if (sd < this.epsilon) {
        return 2.0;
      }
      t += sd;
    }

    return 0.0;
  }

  private circleSDF(
    x: number, y: number,
    cx: number, cy: number,
    r: number
  ): number {
    let ux = x - cx, uy = y - cy;
    return Math.sqrt(ux * ux + uy * uy) - r;
  }

}
