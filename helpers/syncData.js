let initialData = require('../data/initialData');    // raw data (client skeleton )

function syncData(dbData){
    // const dataNew = {};

    // inititalData.Object.keys().forEach( q, page => {
    //     if(q.page == dbData.page){
    //         q.inputs.Object.keys().forEach( i, input => {
                // initialData.Object.keys()[page].inputs.Object.keys()[input].value =  dbData[input].value;

    //         })
    //     }
    // })

    dbData.forEach((q, pageIndex) => { 
            q.inputs.forEach( (i, inputIndex) => {
        Object.assign(initialData[pageIndex].inputs[inputIndex].value, q.page.inputs[inputIndex].value)
        })
    })   

    return initialData;
}