function capitalize(str) {
    const array1 = str.split('')
    array1[0] = array1[0].toUpperCase();
    return array1.join('');
}

module.exports = capitalize;