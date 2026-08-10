import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

/**
 * Pseudo-QR code canvas. The deterministic drawing routine from
 * SOURCE_HTML (mulberry32, seed 42) is moved VERBATIM into
 * ngAfterViewInit.
 */
@Component({
  selector: 'app-qr-code',
  standalone: true,
  template: `<canvas #qrCanvas id="qr" width="75" height="75"></canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:contents' },
})
export class QrCodeComponent implements AfterViewInit {
  @ViewChild('qrCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const qr = this.canvas.nativeElement;
    const ctx = qr.getContext('2d') as CanvasRenderingContext2D;

    function mulberry32(a: number) {
      return function () {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    const rnd = mulberry32(42);
    const n = 21;
    const s = 3;
    const q = 2;

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, qr.width, qr.height);
    ctx.fillStyle = '#111';

    function finder(x: number, y: number) {
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
          const on = i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4);
          if (on) ctx.fillRect((x + i + q) * s, (y + j + q) * s, s, s);
        }
      }
    }

    finder(0, 0);
    finder(14, 0);
    finder(0, 14);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const inF = (i < 8 && j < 8) || (i > 12 && j < 8) || (i < 8 && j > 12);
        if (!inF && rnd() > 0.52) ctx.fillRect((i + q) * s, (j + q) * s, s, s);
      }
    }
  }
}