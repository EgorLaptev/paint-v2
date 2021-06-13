'use strict';

import {Brush} from "./Brush.js";

export class EraserBrush extends Brush {

    static paint(ctx, ev)
    {
        ctx.clearRect(ev.x, ev.y, this.size*2, this.size*2);
    }

}