function caeserCipher(string, shift) {
    const array1 = string.split('');
    for (let i = 0; i < array1.length; i++) {
        array1[i] = String.fromCharCode(array1[i].charCodeAt(0) +shift);
    }
    console.log(array1.join(''));
    return array1.join('');
}
module.exports = caeserCipher;