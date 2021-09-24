let n=5;
let m=20;
let sum=1;
for(let i=n;i<=m;i++){
    if(i%3===0 || i%4===0){
        sum=sum * i;
        console.log(i);
    }
}