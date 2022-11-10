
function countBoomerangs(arr){
    let count = 0;
    for(let i = 1; i < arr.length - 1; i++){
        if(arr[i - 1] === arr[i + 1] && arr[i] !== arr[i-1]){
            count++;
        }
    }
    return count;
}

let test = countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
let test2 = countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
let test3 = countBoomerangs([4, 4, 4, 9, 9, 9, 9]);
let test4 = countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]);
console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);
