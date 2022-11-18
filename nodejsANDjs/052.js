class Chart {
    constructor(width,height) {
     this.width = width;
     this.height = height;   
    }

    drawLine(){
        console.log('draw line');
    }
}

class BarChart extends Chart {
    constructor(width,height){
        super(width,height);
    }

    draw(){
        this.drawLine();
        console.log('sadaadad ${this.width} x ${this.height}');
    }
}

const bb = new BarChart(100,100);

bb.draw();