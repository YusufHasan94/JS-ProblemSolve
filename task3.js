function mostEle(arr){
    let eleFre = {};
    for(let element of arr){
        if(eleFre[element]){
            eleFre[element]++;
        }
        else{
            eleFre[element] = 1;
        }
    }
    let mostFreEle;
    let maxFre = 0;
    for(let element in eleFre){
        if(eleFre[element]>maxFre){
            maxFre = eleFre[element];
            mostFreEle = element
        }
    }
    return mostFreEle;
}
const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(mostEle(arr));