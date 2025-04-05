let arr1=prompt("Input a numeric array separated by space: ").split(' ').map(item=>item=+item);
let arr2=arr1.slice();
console.log( arr2);
arr2.sort((a,b)=>a-b);
console.log(arr2.reverse());