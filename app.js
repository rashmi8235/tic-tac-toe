document.addEventListener("DOMContentLoaded",function(){
  const usernameInput=document.querySelectorAll(".user-input");
  const wins1=document.getElementById("ram1");
  const wins2=document.getElementById("ram2");
  const win3=document.getElementById("reset")
  const element1=document.getElementById("element1");
  const element2=document.getElementById("element2");
  const element3=document.getElementById("element3");
  const element4=document.getElementById("element4");
  const element5=document.getElementById("element5");
  const element6=document.getElementById("element6");
  const element7=document.getElementById("element7");
  const element8=document.getElementById("element8");
  const element9=document.getElementById("element9");

  let currentsymbol="X";
  let initialwin1=0;
  let initalwin2=0;
  let gameover=false;
  usernameInput.forEach((button) => {

  button.addEventListener("click",function(){
    if(!button.textContent&&!gameover){
      button.textContent=currentsymbol;
      if(check(currentsymbol)){
        if(currentsymbol=="X"){
        initalwin2++;
        wins2.textContent=initalwin2;
      }
      else if(currentsymbol=="0"){
        initialwin1++;
        wins1.textContent=initialwin1;
      }
      else {
        initialwin1++;
        initalwin2++;
      }

      }
      gameover=true;
    }
    else{
      currentsymbol=currentsymbol==="X"?"0":"X";
    }
  }
  });
  });

     function check(symbol){
    if((element1.textContent===symbol&&element2.textContent===symbol&&element3.textContent===symbol||element4.textContent===symbol&&element5.textContent===symbol&&element6.textContent===symbol||element7.textContent===symbol&&element8.textContent===symbol&&element9.textContent===symbol)||
      (element1.textContent===symbol&&element5.textContent===symbol&&element9.textContent===symbol||element3.textContent===symbol&&element5.textContent===symbol&&element7.textContent===symbol||element1.textContent===symbol&&element2.textContent===symbol&&element3.textContent===symbol)||
    (element4.textContent===symbol&&element5.textContent===symbol&&element6.textContent===symbol||element7.textContent===symbol&&element8.textContent===symbol&&element9.textContent===symbol||element1.textContent===symbol&&element5.textContent===symbol&&element9.textContent===symbol)||
    (element3.textContent===symbol&&element5.textContent===symbol&&element7.textContent===symbol)||
        (element1.textContent===symbol&&element4.textContent===symbol&&element7.textContent===symbol||element2.textContent===symbol&&element5.textContent===symbol&&element8.textContent===symbol||element3.textContent===symbol&&element6.textContent===symbol&&element9.textContent===symbol)||
        

    (element1.textContent===symbol&&element4.textContent===symbol&&element7.textContent===symbol||element2.textContent===symbol&&element5.textContent===symbol&&element8.textContent===symbol||element3.textContent===symbol&&element6.textContent===symbol&&element9.textContent===symbol)
        
     )

    {
      return true;
    }
    return false;
}
    
  win3.addEventListener("click",function(){
    usernameInput.forEach((button)=>{
      button.textContent="";
      wins2.textContent="0";
      wins1.textContent="0";
      initalwin2=0;
      initialwin1=0;

    })
    gameover=false;
    currentsymbol="X";

  })
    
























})