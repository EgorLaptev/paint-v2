'use strict';

import {Brush} from "./Brush.js";

export default class RectangleBrush extends Brush {

    static paint()
    {

        this.ctx.fillStyle = this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;

        this.ctx.beginPath();
        this.ctx.strokeRect(this.pos.x, this.pos.y, this.size, this.size);

    }

}