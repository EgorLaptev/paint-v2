'use strict';

import {SimpleBrush} from "./SimpleBrush.js";
import {EraserBrush} from "./EraserBrush.js";

import './ToolsPanel.js';

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

    SimpleBrush.paint(ctx, ev);

    if(eraser.checked) EraserBrush.erase(ctx, ev);

});