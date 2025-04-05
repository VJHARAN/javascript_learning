function filterRange(item){
    if (item>=lower &&item<=upper)
        return true;
}








let arr=prompt("Input a numeric array separated by space: ").split(' ').map(item=>item=+item);
let lower=+prompt("input lower limit: ");
let upper=+prompt("input upper limit: ");
let result=arr.filter(filterRange);
console.log(result);
