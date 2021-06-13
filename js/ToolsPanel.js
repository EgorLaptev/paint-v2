'use strict';

import {Brush} from './Brush.js';

const brushSize     = document.getElementById('brushSize'),
      brushColor    = document.getElementById('brushColor'),
      eraser        = document.getElementById('eraser'),
      mirror        = document.getElementById('mirror'),
      rainbowBrush  = document.getElementById('rainbowBrush'),
      rectBrush     = document.getElementById('rectBrush'),
      arcBrush      = document.getElementById('arcBrush'),
      imageInput    = document.getElementById('image');

brushSize.addEventListener('input', () => Brush.size = brushSize.value );
brushColor.addEventListener('input', () => {
    brushColor.previousElementSibling.style.color = brushColor.value;
    Brush.color = brushColor.value
});