'use strict';

import {Brush} from "./Brush.js";

export class SimpleBrush extends Brush {

    static paint(ctx, ev)
    {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;

        ctx.lineWidth = this.size * 2;
        ctx.lineTo(ev.x, ev.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ev.x, ev.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(ev.x, ev.y);
    }

}