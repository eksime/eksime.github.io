---
layout: page
title: abbott.js
---
        
<script src="//cdnjs.cloudflare.com/ajax/libs/nlp_compromise/6.5.3/nlp_compromise.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.0/seedrandom.min.js"></script>
<script src='/public/js/wordvecs1000.js'></script>
<script src='/public/js/word2vecutils.js'></script>
<script src='/public/js/abbott.js'></script>

Type in the box below to generate a sentence:

<input id='text' type='text'>
<div id='abbott'></div>
<div id='words'></div>

<script defer> 
    let input = document.getElementById('text');
    let div = document.getElementById('abbott');
    let canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;

    div.appendChild(canvas);

    let abbott = new Abbott(canvas);
    input.oninput = function(e) {
        abbott.generate(input.value);
    };
    input.onpropertychange = input.oninput;
</script>
