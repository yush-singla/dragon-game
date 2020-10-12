let ignore=0;
///jump funcion
document.addEventListener("keydown",function(event){
  let key=event.key;
  ////console.log(event);
  if(key=='ArrowUp'){
    if(!ignore){
      document.querySelector(".dino").classList.add("jumping");
      ignore=1;
      setTimeout(function(){
        document.querySelector(".dino").classList.remove("jumping");
        ignore=0;
      },901);
    }
  }
});
let a1;
let a2;
function moveHimRight(){
  dino=document.querySelector(".dino");
  dino.classList.remove("dino-left");
  dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
  dino.style.left=dinoX+10+"px";
  if(parseInt(window.getComputedStyle(dino,null).getPropertyValue("right"))<=-10){
    // setTimeout(function(){
    //   dino.style.left=0;
    // },100);
    dino.style.left=0;
  }
  ////console.log("value of right ",window.getComputedStyle(dino,null).getPropertyValue("right"));
}
function moveHimleft(){
  dino=document.querySelector(".dino");
  dino.classList.add("dino-left");
  dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
  dino.style.left=dinoX-10+"px";
  if(parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))<=-10){
    // setTimeout(function(){
    //   dino.style.left=0;
    // },100);
    dino.style.left=1080+"px";
  }
  //console.log("value of right ",window.getComputedStyle(dino,null).getPropertyValue("left"));
  // //console.log(dinoX);
}
function continueMoveRight(){
  a1=setInterval(moveHimRight,1000);
}
function continueMoveLeft(){
  a2=setInterval(moveHimleft,1000);
}

document.querySelector("body").addEventListener("keypress",function(event){
  let key=event.key;
  console.log(event);
  if(key=='ArrowRight'){

    continueMoveRight();
  }
  else if(key=='ArrowLeft'){
    continueMoveLeft();
  }
   /*if(key=='ArrowRight'){
    dino=document.querySelector(".dino");
    dino.classList.remove("dino-left");
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dino.style.left=dinoX+10+"px";
    if(parseInt(window.getComputedStyle(dino,null).getPropertyValue("right"))<=-10){
      // setTimeout(function(){
      //   dino.style.left=0;
      // },100);
      dino.style.left=0;
    }
    //console.log("value of right ",window.getComputedStyle(dino,null).getPropertyValue("right"));
  }
  else if(key=='ArrowLeft'){
    dino=document.querySelector(".dino");
    dino.classList.add("dino-left");
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dino.style.left=dinoX-10+"px";
    if(parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))<=-10){
      // setTimeout(function(){
      //   dino.style.left=0;
      // },100);
      dino.style.left=1080+"px";
    }
    //console.log("value of right ",window.getComputedStyle(dino,null).getPropertyValue("left"));
    // //console.log(dinoX);
  }*/
});
document.querySelector("body").addEventListener("keyup",function(event){
  let key=event.key;
  if(key=='ArrowRight'){
    //alert('upp');
    clearInterval(a1);
  }
  else if(key=='ArrowLeft'){
    clearInterval(a2);
  }

});

setInterval(function(){
  dino=document.querySelector(".dino");
  drago=document.querySelector(".monster")
  dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
  dragoX=parseInt(window.getComputedStyle(drago,null).getPropertyValue("left"));
  dinoY=parseInt(window.getComputedStyle(dino,null).getPropertyValue("bottom"));
  dragoY=parseInt(window.getComputedStyle(drago,null).getPropertyValue("bottom"));
  offsetX=Math.abs(dragoX-dinoX);
  offsetY=Math.abs(dragoY-dinoY);
  //console.log("offsetx "+offsetX+" offsetY "+offsetY);
  if(offsetX<=80&&offsetY<=20){
    //game over is here
    //alert("game over");
  }
},100);
