const fechanacimiento=document.getElementById("FNacimiento");
const edad =document.getElementById("edad");


const calcularedad=(fechanacimiento)=>{
   const fechaactual=new Date();
   const diaactual =parseInt(fechaactual.getDate());
   const mesactual =parseInt(fechaactual.getMonth()); 
   const anoactual =parseInt(fechaactual.getFullYear());
  
  
   const anonacimiento = parseInt(String(fechanacimiento).substring(0, 4));
   const mesnacimiento = parseInt(String(fechanacimiento).substring(5, 7));
   const diasnacimiento = parseInt(String(fechanacimiento).substring(8, 10));
   

   let edad=anoactual-anonacimiento;
   if(mesactual<mesnacimiento){
      edad--;
   }else if(mesactual == mesnacimiento){
      if(diaactual < diasnacimiento){
         edad--;
      }

   }
   return edad;
   
}

window.addEventListener('load', function(){
   fechanacimiento.addEventListener("change", function(){
      if(this.value >= 18){
         edad.innerText = `su edad es: ${calcularedad(this.value)} años`;
      }
      else {
         edad.innerText = `eres menor de edad, tu edad es :${calcularedad(this.value)} años`;
      
         
      }
          
       }); 
});

