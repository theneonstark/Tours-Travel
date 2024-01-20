let count=0
let run=()=>{
    let imga=document.querySelectorAll('.back_img')
    for(var im=0; im<imga.length; im++){
        imga[im].style.opacity='0';
    }
    count++
    if(count>imga.length){
        count=1;
    }
    imga[count-1].style.opacity='1';
}
console.log(count);
let counte=0;
let con=()=>{
    let cor=document.querySelectorAll('.dot')
    for(var co=0; co<cor.length; co++){
        cor[co].style.transform=`scale(.1)`;
    }
    counte++
    console.log(counte);
    if(counte>cor.length){
        counte=1;
    }
    cor[counte-1].style.transform=`scale(1.2)`
}
setInterval(con,3000);
setInterval(run,3000);
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
// .typeString('travle place')
//   .pauseFor(2000)
//   .deleteChars(12)
  .typeString('kerala')
  .pauseFor(2000)
  .deleteChars(6)
  .typeString('indonesia')
  .pauseFor(2000)
  .deleteChars(9)
  .typeString('thailand')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('bali')
  .pauseFor(1000)
  .deleteChars(4)
//   .pauseFor(1000)
  .start();
  let coute=0;
  let par=()=>{
    let parh=document.querySelectorAll('.graph');
    for(let pgr=0; pgr<=parh.length; pgr++){
        parh[pgr].style.transform=`translateY(-100px)`
    }
    coute++;
    if(coute>parh.length){
        coute=1
    }
    parh[coute-1].style.transform=`translateY(-100px)`
}
setInterval(par,3000)
  
