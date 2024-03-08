import { CanvasContext } from '../src/CanvasContext';

describe('Canvas Context', () => {

      it('Should be able to instantiate so the object is not null', () => {
        const canvas: CanvasContext = new CanvasContext();
        expect(canvas).not.toBe(null);
      });

      it('Should be able to write a message to the console', () => {
        const canvas: CanvasContext = new CanvasContext();
        const returnValue = canvas.logMessage('Log this message');
        expect(returnValue).toEqual('Log this message');
      });

});
