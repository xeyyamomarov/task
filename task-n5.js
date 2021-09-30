// sade ededlerin tapilmasi


let x=4
let y=100;
for(let j=2;j<=y;j++){
let result=j;
for(let i=2;i<=j/2;i++){
    if(j%i===0){
        result=false;

        break;
    }
    else result=true;
}
if (result) console.log(j);
}
