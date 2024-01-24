let count=0
let main=()=>{
  let img=document.querySelectorAll(".back_img");
  for(var imge=0; imge<img.length; imge++){
    img[imge].style.opacity='0';
    // count++;
  }
  if(count>img.length){
    count=1;
  }
  img[count-1].style.opacity='1';
  // console.log(count);
  let slider=document.querySelectorAll(".fram_img");
  slider.forEach((elem,index)=>{
    elem.style.left=`${index*100}%`;
  })
  let scroll=()=>{
    slider.forEach((fram) => {
      fram.style.transform=`translateX(-${count*100}%)`
    });
  }
nxt=()=>{
    scroll();
    if(count<=slider.length){
        count-1;
     }
     //if(count==-1){
    //     count=0;
    //     scroll();
    // }
    console.log(count+"hii")
  }
  left=()=>{
    scroll();
    if(count>=slider.length){
      
      count--;
      main();
      nxt();
    }
  }
// pre=()=>{
//     scroll();
//     console.log(count+"hee")
// }
}
let right=()=>{
  count++;
  main();
  nxt();
}

