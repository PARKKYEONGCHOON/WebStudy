const Emitter = require('events');
const eventConfig = require('./config').events;
const em = new Emitter();

em.on(eventConfig.Greet, ()=>{
    console.log('hhheee');
});

em.on(eventConfig.Greet, ()=>{
    console.log('aaaa');
});


em.emit(eventConfig.Greet);