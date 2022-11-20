function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(person.stamina > 50)
            {
                person.stamina -= 30;
                resolve({
                    result : `${name} complete`,
                    //loss : 30
                    
                });
            }    
            else
            {
                reject(new Error(`${name} fail`));
            }
        }, (1000));
    });
};

const harin = {stamina : 100};

const excute = async function(){
    try
    {
        let v = await doJob('w',harin);
        console.log(v.result);
        v = await doJob('s',harin);
        console.log(v.result);
        v = await doJob('w',harin);
        console.log(v.result);
        v = await doJob('s',harin);
        console.log(v.result);

    }
    catch(e)
    {
        console.log(e);
    }

}

excute();