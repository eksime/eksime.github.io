---
layout: page
title: abbott
---

<script src='/public/js/wordvecs1000.js'></script>
<script src='/public/js/word2vecutils.js'></script>
<script src='/public/js/abbott.js'></script>
<script defer> 
    let input = document.getElementById('text');
    let div = document.getElementById('abbott');
    var canvas = document.createElement("canvas");
    div.appendChild(canvas);

    let abbott = new Abbott(canvas);
    input.oninput = function(e) {
        abbott.generate(input.value);
    };
    input.onpropertychange = input.oninput;
</script>

# content

<input id='text' type="text"> </input>
<div id='abbott'></div>