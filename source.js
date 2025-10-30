/*

Creating a  random password generator app!

*/

const generatePassword = (passwordLength) => {
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let charSetArray = charSet.split("");
    return charSetArray;
}

console.log(generatePassword(10));
