function generatePass(len){
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const specialChar = "!@#$%^&*()_-+=<>?/{}~";
    const allChar = upperCaseChar + lowerCaseChar + num + specialChar;
    let pass = '';
    for(let i=0; i<len; i++){
        const randIndx = Math.floor(Math.random()*allChar.length);
        pass += allChar[randIndx]
    }
    return pass;
}
console.log(generatePass(10));