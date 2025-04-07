let sijo={name:"Sijo",
            age:89,
};
let raashi={ name:"Raashi",
            age:64,
};
let linda={name:"Linda",
            age:26,
};
let kureshi={name:"Kureshi-Abraam",
                age:105,
};
let array=[sijo,raashi,linda,kureshi];
let avg=array.reduce((total,currentItem)=>total+currentItem.age,0)/array.length;
 
console.log(avg);