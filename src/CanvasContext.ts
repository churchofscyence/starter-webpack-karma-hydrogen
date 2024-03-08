class CanvasContext {

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public logMessage(msg: string): string {
    console.log(msg);
    return msg;
  }

  public draw(color:string){
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.context .beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = color;
    this.context .rect(20, 20, 150, 100);
    this.context .stroke();
  }
}

export {CanvasContext};
