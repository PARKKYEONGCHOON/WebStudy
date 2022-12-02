const Emitter = require('./Emitter');
const em = new Emitter();

em.on('greet',()=>{
    console.log('first');
});

em.on('greet', ()=>{
    console.log('second');
});

em.emit('greet');