let count=0;
let counting=0;

travl(counting)
function travl(num){
    let title=document.querySelectorAll(".app");
    let image=document.querySelectorAll(".fram_img");
    let imagen=document.querySelectorAll(".imagen");
    let images=document.querySelectorAll(".back_img");
    let phone=document.querySelectorAll(".phone_img");
    let dot=document.querySelectorAll(".dot");
    let doter=document.querySelectorAll(".dots_p");
    let grap=document.querySelectorAll(".graph");
    if(num==images.length){
        counting=0;
        num=0;
    }
    if(num<0){
        counting=title.length-1;
        num=title.length-1;
    }
    if(count>=image.length){
        count=-1;
    }
    if(count>=images.length){
        count=-1;
    }
    if(count==-1){
        count=0;
    travl(count);
    }
    console.log(num)
        image.forEach((elem,index)=>{
            elem.style.left=`${index*100}%`;
        })
        title.forEach((ele,ind)=>{
            ele.style.bottom=`${ind*100}%`
        })
         grap.forEach((elmen,inde)=>{
            elmen.style.top=`${inde*100}%`
        })
        for(var backimg=0; backimg<images.length;backimg++){
            images[backimg].style.opacity='0';
        }
          for(var backimg=0; backimg<images.length;backimg++){
            phone[backimg].style.opacity='0';
        }
        for(var card=0; card<imagen.length;card++){
            imagen[card].style.transform='scale(.5)';
        }
        for(var dots=0; dots<dot.length;dots++){
            dot[dots].style.transform='scale(.1)';
        }
         for(var dotes=0; dotes<doter.length;dotes++){
            doter[dotes].style.transform='scale(.1)';
        }
        dot[num].style.transform='scale(1)';
        doter[num].style.transform='scale(1)';
        images[num].style.opacity='1';
        phone[num].style.opacity='1';
        imagen[num].style.transform='scale(1.1)';
    image.forEach((img,idx)=>{
        img.style.transform=`translateX(-${counting*100}%)`
    })
    title.forEach((para)=>{
        para.style.transform=`translateY(-${counting*100}%)`
    })
    grap.forEach((pra)=>{
        pra.style.transform=`translateY(-${counting*100}%)`
    })
}
function right(y){
    count++;
    counting= counting + y;
    travl(counting);
    console.log(count+"hii")
}
let left=(y)=>{
    count--;
    travl(counting);
    counting= counting + y;
    console.log(count+"hee")
}


