function findSecondSmallest(arr){
    arr.sort((a,b)=> a-b);
    return arr[1];
}
const arr = [8,6,7,2,5,3,1,0,4,5,5];
console.log(findSecondSmallest(arr));