let count=0
let run=()=>{
    let imga=document.getElementsByClassName("img")
    for(var im=0; im<imga.length; im++){
        imga[im].style.opacity='0';
    }
    count++
    if(count>=imga.length){
        count=1;
    }
    imga[count-1].style.opacity='1';
}
console.log(count);
setInterval(run,4000);
let counte=0;
let con=()=>{
    let cor=document.getElementsByClassName("cri")
    for(var co=0; co<cor.length; co++){
        cor[co].style.transform=`scale(.1)`
    }
    counte++
    if(counte>=cor.length){
        counte=1;
    }
    cor[counte-1].style.transform=`scale(1.2)`
}
setInterval(con,4000);
console.log(counte);
let cot=0;
let sil=document.querySelectorAll('.imge');
sil.forEach((elem,index)=>{
    elem.style.left=`${index*100}%`;
            // console.log(index + "hell");
})
let scroll=()=>{
    sil.forEach((imge)=>{
        imge.style.transform=`translateX(-${cot*100}%)`
    })
            // console.log(index,elem+"hell");
}
let start=setInterval(()=>{
    cot++;
    scroll();
    if(cot>=sil.length-1){
        count=-1;
    }
    console.log('heloo');
},2000);
let nxt=()=>{
    cot++;
    scroll();
    if(cot>=sil.length){
        cot=-1;
    }if(cot==-1){
        cot=0;
        scroll();
    }
}
nxt()