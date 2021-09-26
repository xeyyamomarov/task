let x=1000;
let z=9999;
let m1=""
let m2=""
let m3=""
let m4=""
for(let i=x;i<=z;i++){

     m4=i%10;
     m3=parseInt(i/10)%10;
     m2=parseInt(i/100)%10;
     m1=parseInt(i/1000)
     if(m1===m4 && m2===m3){
         console.log(i);
     }
     else console.log("no");
    
}

