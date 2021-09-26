let x=11;
let z=45;
// let sum=""
// let sum2=""
for(let i=x;i<z;i++){

   let  m2=i%10;
    let m1=parseInt(i/10);
    if(m1===m2){
        console.log(i);
    }
    else console.log("no");
}
