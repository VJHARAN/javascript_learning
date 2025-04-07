
let pete = { name: "Pete", age: 30 };
let john = { name: "John", age: 25 };

let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];
arr.map(item=>alert(item.name+item.age))
arr.sort((a,b)=> a.age-b.age) ;
arr.map(item=>alert(item.name+item.age)) 