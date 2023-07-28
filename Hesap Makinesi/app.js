const btnRakam=document.querySelectorAll(".btnRakam");
const gosterge =document.querySelector("#gosterge");
const btnOpt=document.querySelectorAll(".btnOpt");
const islem =document.querySelector("#islem");
const EksiArtı =document.querySelector(".EksiArtı");
const BtnKare =document.querySelector(".BtnKare");
const BtnKök =document.querySelector(".BtnKök");
const btnFaktoriyel =document.querySelector(".btnFaktoriyel");
const onÜs =document.querySelector(".onÜs");
const btnÜs =document.querySelector(".btnÜs");
const btnTemizle =document.querySelector(".btnTemizle");
const btnSil =document.querySelector(".btnSil");
const btnDot =document.querySelector(".btnDot");
const btnEqual =document.querySelector(".btnEqual");
let optDurum=false,opt="",sonuc=0;

function Tıkla(e){
    if(gosterge.textContent==" " || optDurum ){
        gosterge.textContent="";
    }
gosterge.textContent+=this.textContent;
optDurum=false;
}

const Eşit=(e)=>{
   islem.textContent="";
   optDurum=true;
   switch(opt){
    case "+":gosterge.textContent=(sonuc+Number(gosterge.textContent));break;
    case "*":gosterge.textContent=(sonuc*Number(gosterge.textContent));break;
    case "-":gosterge.textContent=(sonuc-Number(gosterge.textContent));break;
    case "/":gosterge.textContent=(sonuc/Number(gosterge.textContent));break;
    default:break;
} 
sonuc=Number(gosterge.textContent);
gosterge.textContent=sonuc;
sonuc=0;
opt=""
}
function İşlem(e){
    optDurum=true;
                  var yeniOpt=this.textContent;
                  islem.textContent=islem.textContent+" "+gosterge.textContent+" "+yeniOpt;
                switch(opt){
                    case "+":gosterge.textContent=(sonuc+Number(gosterge.textContent));break;
                    case "*":gosterge.textContent=(sonuc*Number(gosterge.textContent));break;
                    case "-":gosterge.textContent=(sonuc-Number(gosterge.textContent));break;
                    case "/":gosterge.textContent=(sonuc/Number(gosterge.textContent));break;
                    default:break;
                } 
               sonuc=Number(gosterge.textContent);
               opt=yeniOpt;      
}
btnRakam.forEach(function(element){
    element.addEventListener("click",Tıkla)
    });
    btnOpt.forEach(function(element){
    element.addEventListener("click",İşlem)
    });
btnEqual.addEventListener("click",Eşit);

EksiArtı.addEventListener("click",()=>{
    gosterge.textContent=gosterge.textContent*(-1);
    optDurum=true;
});
BtnKare.addEventListener("click",()=>{
    gosterge.textContent=Math.pow(gosterge.textContent,2);
    optDurum=true;
});
BtnKök.addEventListener("click",()=>{
    gosterge.textContent= Math.sqrt(gosterge.textContent);
    optDurum=true;
});
btnFaktoriyel.addEventListener("click",()=>{
   let faktöriyel=1;
   for(let i=1;i<=gosterge.textContent;i++){
    faktöriyel*=i;
   }
   gosterge.textContent=faktöriyel;
   optDurum=true;
});

btnSil.addEventListener("click",()=>{
    gosterge.textContent="";
});
btnTemizle.addEventListener("click",()=>{
    gosterge.textContent="";
    islem.textContent="";
    sonuc=0;
    opt="";
});
btnDot.addEventListener("click",()=>{
  if( !gosterge.textContent.includes("."))gosterge.textContent+=".";
  optDurum=false;
});