'use strict';

import {Canvas} from './Canvas.js';
import {Brush} from './Brush.js';
import {EraserBrush} from "./EraserBrush.js";
import {SimpleBrush} from "./SimpleBrush.js";

const brushSize     = document.getElementById('brushSize'),
      brushColor    = document.getElementById('brushColor'),
      eraser        = document.getElementById('eraser'),
      mirror        = document.getElementById('mirror'),
      rainbowBrush  = document.getElementById('rainbowBrush'),
      rectBrush     = document.getElementById('rectBrush'),
      arcBrush      = document.getElementById('arcBrush'),
      imageInput    = document.getElementById('image'),
      checkBoxes    = document.querySelectorAll("input[type='checkbox']");

/* Size & Color of Brush */
brushSize.addEventListener('input', () => Brush.size = brushSize.value );
brushColor.addEventListener('input', () => {
    brushColor.previousElementSibling.style.color = brushColor.value;
    Brush.color = brushColor.value
});

checkBoxes.forEach(checkBox => {
   checkBox.addEventListener('input', evt => {

       // let mode = checkBox.checked;
       //
       // checkBoxes.forEach(checkBox => {
       //    checkBox.previousElementSibling.style.color = 'white';
       //    checkBox.checked = false;
       // });
       //
       // checkBox.checked = mode;

       checkBox.previousElementSibling.style.color = (checkBox.checked) ? '#0075FF' : 'white';

   });
});

/* Eraser */
eraser.addEventListener('input', ev => {
    Canvas.brush = (eraser.checked) ? EraserBrush : SimpleBrush;
});

/* Mirror */
mirror.addEventListener('input', ev => {
    Brush.mirror = mirror.checked;
});

/* Rainbow */
rainbowBrush.addEventListener('input', ev => {
    Brush.rainbowBrush = rainbowBrush.checked;
});



