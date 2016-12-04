---
layout: page
title: abbott
---

<script src='/public/js/wordvecs1000.js'></script>
<script src='/public/js/word2vecutils.js'></script>
<script src='/public/js/abbott.js'></script>
<script defer> 
    let input = document.getElementById('text');
    let canvas = document.getElementById('abbott');

    let abbott = new Abbott(canvas);
    input.oninput = function(e) {
        abbott.generate(input.value);
    };
    input.onpropertychange = input.oninput;
</script>

# content

<input id='text' type="text"> </input>
<canvas id='abbott'></canvas>