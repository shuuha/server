let initialData = require('../data/initialData');    // raw data (client skeleton )

function syncData(dbData){
    if(dbData.length){
    dbData.forEach((q, pageIndex) => { 
            q.inputs.forEach( (i, inputIndex) => {
        Object.assign(initialData[pageIndex].inputs[inputIndex].value, q.page.inputs[inputIndex].value)
            })
        })
    }

    return initialData;
}

module.exports = syncData;