/*

Creating a  random password generator app!

*/

const generatePassword = (passwordLength) => {
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let charSetArray = charSet.split("");
    let randomPassword = "";
    for (let i=0; i<passwordLength; i++) 
        randomPassword += charSetArray[Math.floor(Math.random() * charSet.length)];
    return randomPassword;    
}


let password = generatePassword(20);
console.log(`Generated password: ${password}`);
