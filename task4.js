function targetValue(arr, target){
    let start = 0;
    let end = 1;
    while(start<end){
        let sum = arr[start] + arr[end];
        if(sum===target){
            return[start,end];
        }
        else{
            start++;
            end++;
        }
    }
    return [];
}
const arr = [1, 3, 6, 8, 11, 15];
console.log(targetValue(arr, 9));