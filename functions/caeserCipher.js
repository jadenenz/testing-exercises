function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

function caeserCipher(string, shift) {
    const array1 = string.split('');
    for (let i = 0; i < array1.length; i++) {
        if (!isLetter(array1[i])){ //if its not a letter do not change it
            array1[i] = array1[i];
        }
        else {
            if ((array1[i].toLowerCase().charCodeAt(0) + shift) > 122){
                array1[i] = String.fromCharCode((array1[i].charCodeAt(0) + shift) - 26)
              }
              else {
                array1[i] = String.fromCharCode(array1[i].charCodeAt(0) + shift);
              }
        }
    }
    return array1.join('');
}
module.exports = caeserCipher;