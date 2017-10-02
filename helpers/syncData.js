let initialData = require('../data/initialData');    // raw data (client skeleton )

function syncData(dbData){        

    if(dbData.length){
        dbData.inputs.forEach((i) => {             
                Object.assign(initialData[dbData.page].inputs || {} , i);
        })
    }

    return initialData;
}

module.exports = syncData;