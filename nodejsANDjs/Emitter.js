class Emitter {
    constructor(){
        this.events = {};
    }

    on(type, listner){
        this.events[type] = this.events[type] || [];
        this.events[type].push(listner);
    }

    emit(type){
        if(this.events[type]){
            this.events[type].forEach((listner) => {
                listner();
            });
        }
    }
}

module.exports = Emitter;