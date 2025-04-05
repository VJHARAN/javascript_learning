 
let arr=prompt("Input numeric array separated by space: ").split(' ').map(item=>item=+item);
console.log(arr);
arr.sort((a,b)=>a-b);
console.log(arr);
console.log(arr.reverse());