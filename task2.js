function sum(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=0){
            total = total+arr[i];
        }
    }
    return total;
}
let arr = [2, -5, 10, -3, 7];
console.log(sum(arr));