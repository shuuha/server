let initialData = require('../data/initialData');    // raw data (client skeleton )

function syncData(dbData){        

    if(dbData.length){
    dbData.forEach((q, pageIndex) => { 
            q.inputs.forEach( (i, inputIndex) => {
            console.log(initialData["0"].inputs["0"].value);
        // Object.assign(initialData[pageIndex].inputs[inputIndex].value, i.value)
            })
        })
    }

    return initialData;
}

module.exports = syncData;