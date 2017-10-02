let dataTemplate = require('../data/dataTemplate');    // raw data (client skeleton )

function syncData(dbData){        

    if(dbData.length){        
        dbData.forEach((q, pageIndex) => { 
            q.inputs.forEach( (i, inputIndex) => {                
                Object.assign(initialData[pageIndex].inputs[inputIndex] || {} , i)
            })
        })
    }

    return initialData;
}

module.exports = syncData;