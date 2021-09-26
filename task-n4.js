let x=35;
let sum=""
let a=""
for(let i=1;i<x;i++){

    sum=i%10;
    a=parseInt(i/10)
    if(sum===a){
        console.log(i);
    }
    else console.log("no");
    
}

// let a=45;
// let c=a%10;
// let b=parseInt(a/10)
// if(c===b){
//     console.log("yes");
// }
// else console.log("no");
