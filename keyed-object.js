let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
let res = users.reduce((objct,val)=>{
objct[val.id]=val;
return objct;

},{});
console.log(res );
    