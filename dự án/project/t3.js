let adressOpen = document.querySelector('#address-frorm');
let adressClose =document.querySelector('#address-close');
let count = 0;
    adressOpen.addEventListener("click",function (){
        document.querySelector('.address-form').style.display = "flex";
       console.log(document.querySelector('.address-form').style.display)
    })

    adressClose.addEventListener('click',function (){
        document.querySelector('.address-form').style.display = "none";
    })
//slider----------------------->
const rigbtn = document.querySelector('.fa-chevron-right');
const leftbtn =document.querySelector('.fa-chevron-left');

    rigbtn.addEventListener('click',function (){
        count+=1
        if(count>4){
            count=0;
        }
        document.querySelector('.slider-content-left-top').style.right = count*100+'%';
    })

    leftbtn.addEventListener('click',function (){
        count-=1
        if(count<0){
            count=4
        }
        document.querySelector('.slider-content-left-top').style.right = count*100+'%';
    })
function autoImage(){
        count+=1;
        if (count>4){
            count=0
        }
    document.querySelector('.slider-content-left-top').style.right = count*100+'%';
    }
setInterval(autoImage,2000) ;