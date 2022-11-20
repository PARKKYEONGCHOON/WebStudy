const timer = {
    run : function(){
        if(this.t) console.log('실행중');

        this.t = setTimeout(function(){
            console.log('1초 뒤 실행');
        }, 1000);
    },

    cancel : function(){
        if(this.t) clearTimeout(this.t);
        this.t = undefined;
    }
};

timer.run();
timer.cancel();
timer.run();