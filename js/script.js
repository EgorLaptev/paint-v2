'use strict';

import {Canvas} from "./Canvas.js";
import {Brush} from "./Brush.js";
import {SimpleBrush} from "./SimpleBrush.js";

import './toolsPanel.js';


Canvas.brush = SimpleBrush;

const cnv = document.getElementById('canvas'),
      ctx = cnv.getContext('2d');

cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

let mouseDown = false;

cnv.addEventListener('mousedown', evt => mouseDown = true);
cnv.addEventListener('mouseup', evt => {
    mouseDown = false;
    ctx.beginPath();
});

cnv.addEventListener('mousemove', ev => {

    if (!mouseDown) return;

    Canvas.brush.paint(ctx, ev);

    if(Brush.mirror) {

        Canvas.brush.paint(ctx, {
            x: cnv.width - ev.x,
            y: cnv.height - ev.y
        });

    }

});