'use strict';

import {Brush} from "./Brush.js";

export default class CircleBrush extends Brush {

    static paint()
    {

        this.ctx.fillStyle = this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;

        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI*2);
        this.ctx.stroke();

    }

}