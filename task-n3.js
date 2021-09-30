let n=1;
let m=17;
for(let j=1;j<=m;j++){
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


