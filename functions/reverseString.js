function reverseString(str) {
    const array1 = str.split('');
    reversed = array1.reverse();
    return reversed.join('');
}

module.exports = reverseString;