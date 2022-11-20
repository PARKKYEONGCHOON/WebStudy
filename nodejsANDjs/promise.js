function promiseForHomework(mustDo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('doing');
            if(mustDo){
                resolve({
                    result: 'result'
                });
            }
            else
            {
                reject(new Error('lazy'));
            }
        },3000);
    });
};

const proA = promiseForHomework(true);
console.log('A create');

const proB = promiseForHomework();
console.log('B create');

proA.then(v => console.log(v));

proB
    .then(v => console.log(v))
    .catch(e => console.error(e));