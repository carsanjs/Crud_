
function mostrtrabajo(){
  const traerinputselect = document.getElementById("PreTrabajo"); let inputselecvalue=traerinputselect.value;
  

/////////////hijos
  const traerinputhijos=document.getElementById("PreHijos").value;
  if(traerinputhijos==1){
    document.getElementById("MasPreTrabajo").style.display = 'block';
  
  }
  else{
    document.getElementById("MasPreTrabajo").style.display = 'none';
  }

  ////////////////////////77estadocicil
  const traerinputcivil=document.getElementById("EstadoCivil").value;
  if(traerinputcivil==1){
    document.getElementById("maspreestadocivil").style.display = 'block';
  
  }
  else{
    document.getElementById("maspreestadocivil").style.display = 'none';
  }
  /////////////////sexo
  const traerinputselectsexo =document.getElementById("sexo").value;
  if(traerinputselectsexo==3){
    document.getElementById("MasPresexo").style.display = 'block';
  }else{
    document.getElementById("MasPresexo").style.display = 'none';
  }



if(inputselecvalue==1){

   const aggdiv=document.getElementById("mastrabajo").style.display = 'block';

   let aggdivvalue=aggdiv.length;
   if(aggdivvalue !=0 || aggdivvalue !=" " || aggdivvalue.value !=null){
    const verifvalor= document.getElementById("valortrabajo").style.display = 'block';
    let verivalorvalue=verifvalor.length;
    if(NaN(verivalorvalue)){
     
    }
    else{
      console.log("entro aca")
    }
   }else{
  
   }
 return true;

}
else{document.getElementById("mastrabajo").style.display = 'none';
document.getElementById("valortrabajo").style.display = 'none';
  return false;
}




}
