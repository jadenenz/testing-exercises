function analyzeArray(array){
    const results = {
        avg: (array) => array.reduce((a, b) => a + b) / array.length,
        min: (array) => Math.min.apply(Math, array)
    }
    return results.avg(array);
}
module.exports = analyzeArray;

//FIND OUT HOW TO RETURN AN OBJECT WITH EVERY FUNCTION DONE TO THE INITIAL ARRAY. MAYBE THE FUNCTION ITSELF DOESNT NEED A RESULTS OBJECT WITH MANY FUNCTION METHODS?