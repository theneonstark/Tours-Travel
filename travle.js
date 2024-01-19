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