let dataTemplate = require('../data/dataTemplate');    // raw data (client skeleton )

function syncData(dbData){        

    if(dbData.length){        
        console.log(dbData);
        dbData.forEach((q, pageIndex) => { 
            q.inputs.forEach( (i, inputIndex) => {                
                Object.assign(dataTemplate[pageIndex].inputs[inputIndex] || {} , i)
            })
        })
    }
    console.log(dataTemplate);

    return dataTemplate;
}

module.exports = syncData;