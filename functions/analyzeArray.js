function analyzeArray(array){
    const functions = {
        avg: (array) => array.reduce((a, b) => a + b) / array.length,
        min: (array) => Math.min.apply(Math, array),
        max: (array) => Math.max.apply(Math, array),
        length: (array) => array.length,
    }
    const results = {
        avg: functions.avg(array),
        min: functions.min(array),
        max: functions.max(array),
        length: functions.length(array),
    }
    return results;
}
module.exports = analyzeArray;

//FIND OUT HOW TO RETURN AN OBJECT WITH EVERY FUNCTION DONE TO THE INITIAL ARRAY. MAYBE THE FUNCTION ITSELF DOESNT NEED A RESULTS OBJECT WITH MANY FUNCTION METHODS?