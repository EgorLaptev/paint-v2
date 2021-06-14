'use strict';

import {Canvas} from "./Canvas.js";
import {Brush} from "./Brush.js";
import {SimpleBrush} from "./SimpleBrush.js";
import './toolsPanel.js';

const cnv = document.getElementById('canvas'),
      ctx = cnv.getContext('2d');

/* Canvas sizes */
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

Brush.ctx = ctx;
Brush.cnv = cnv;

Canvas.brush = SimpleBrush; // Set default brush

let mouseDown = false;

cnv.addEventListener('mousedown', evt => mouseDown = true);
cnv.addEventListener('mouseup', evt => {
    mouseDown = false;
    ctx.beginPath();
});
cnv.addEventListener('mousemove', e => {

    if (!mouseDown) return;

    Brush.pos.x = e.clientX;
    Brush.pos.y = e.clientY;
    
    Canvas.brush.paint();

    /* Mirror mode */
    if(Brush.mirror) {

        Brush.pos.x = cnv.width - Brush.pos.x;
        Brush.pos.y = cnv.height - Brush.pos.y;

        Canvas.brush.paint();

    }

});

/* Resize canvas */
window.addEventListener('resize', evt => {

    cnv.width  = window.innerWidth;
    cnv.height = window.innerHeight;

});