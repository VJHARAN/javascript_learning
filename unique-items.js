let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
let unique=[];
 strings.forEach((item)=> {
    if (!unique.includes(item))
        unique.push(item);       
    } );
console.log(unique);