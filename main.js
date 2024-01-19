

function findTarget(target , arr){
    // Find  Sum Of Target Number From Array  
    for(let i = 0 ; i< arr.length ; i++){
        for(let j = i+1 ;j<arr.length ; j++ ){
            // If The Sum Of These Numbers Equal Target Number 
            if(arr[i]+arr[j] === target){
                return [i,j];
            }
        }
    }
    // If There Is No Solution
    return "No Solution";
}
let arr = [2,7,11,15];
console.log(findTarget(9 , arr));