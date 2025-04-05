function filterArray(arr,lower,upper){
    for (i=0;i<arr.length;i++){
        if (arr[i]<lower||arr[i]>upper)
        {   
            arr.splice(i,1);
            i--;
        }
    }
}




let arr=prompt("Input a numeric array separated by space: ").split(' ').map(item=>item=+item);
let lower=+prompt("input lower limit: ");
let upper=+prompt("input upper limit: ");
console.log(arr);
filterArray(arr,lower,upper);
console.log(arr);
 
