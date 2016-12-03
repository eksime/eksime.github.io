class Abbott {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.lineCap="round";

        this.radius = 100;
        this.x = 300;
        this.y = 300;


        this.nlp = window.nlp_compromise;
    }

    generate(sentence) {
        this.sentence = sentence.trim();

        let wordlength = 500;
        let text = this.nlp.text(this.sentence).contractions.expand().root().split(' ');
        let backgroundRNG = new Math.seedrandom(text);

        let words = Array.from(new Set([].concat.apply([],text.map(function(e) {return Word2VecUtils.findSimilarWords(1, e).map(function(e) {return e[0]})}))));
        document.getElementById("words").innerHTML = '<ul><li>' + words.join("</li><li>") + '</li></ul>';


        let data = new Array(10000).fill(0);
        
        for (let i = 0; i < words.length; i++) {
            let rng = new Math.seedrandom(words[i]);
            for (let j = 0; j < wordlength; j++) {
                data[i*wordlength + j] = rng() * 2 - 1;
            }
        }
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < data.length; i++) {
            let rng = new Math.seedrandom(data[i])
            let theta = ((1.8 * Math.PI)/data.length) * i;

            let smooth = i < words.length * wordlength? Math.abs(Math.sin((Math.PI/(words.length * wordlength)) * i)) : 1;
            
            let x2 = this.radius * Math.cos(theta);
            let y2 = this.radius * Math.sin(theta);

            let x3 = 0;
            let y3 = 0;

            if (i % 30 == 0) {
                this.ctx.beginPath();
                this.ctx.arc(this.x + x2, this.y + y2, rng()*3 + rng()*4*smooth, 0, 2*Math.PI);
                this.ctx.fill()
            }

            this.ctx.lineWidth=rng()*20*smooth;
            if (i % 100 == 0 && data[i] !== 0 && this.sentence.length > 0) {
                for (let j = 0; j < rng() * 100 * smooth ; j++ ) {
                    let dir = rng()*2*Math.PI;
                    let dist = rng()*10;

                    let x4 = x3;
                    let y4 = y3;
                    x3 += dist * Math.cos(dir);
                    y3 += dist * Math.sin(dir);

                    this.ctx.globalAlpha = 0.6 + rng() * 0.01;

                    this.ctx.beginPath();
                    this.ctx.moveTo(this.x + x2 + x4, this.y + y2 + y4);
                    this.ctx.lineTo(this.x + x2 + x3, this.y + y2 + y3);
                    this.ctx.stroke();
                }
            } else if (i % 50 == 0  && data[i] == 0 ) {
                this.ctx.beginPath();
                this.ctx.arc(this.x + x2, this.y + y2, backgroundRNG() * 2, 0, 2*Math.PI);
                this.ctx.fill()
            }
        }

    }
}