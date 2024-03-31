//-----  Función de agregar error  ------//
function errorForm(idElementForm, textoAlerta){
    let elemento = idElementForm;
    let textoInterno = textoAlerta;
    let elementoId = document.getElementById(elemento);
    elementoId.classList.add('error');
    elementoId.classList.remove('validado');
    elementoId.classList.remove('sinvalidar');
    errorId = 'error-'+String(elemento);
    let tieneError = document.getElementById(errorId);
    
    if(!tieneError){
      const parrafo = document.createElement("p");
      const contParrafo = document.createTextNode(textoInterno);
      parrafo.appendChild(contParrafo);
      parrafo.classList.add('textoError');
      parrafo.id = 'error-'+String(elemento)
      //Depende de estructura de HTML
      elementoId.parentNode.appendChild(parrafo);
    }
  }



  //----- Función de remover error ------//
  function validadoForm(idElementForm){
    let elemento = idElementForm;
    let elementoId = document.getElementById(elemento);
    elementoId.classList.remove('error');
    elementoId.classList.add('validado');
    elementoId.classList.remove('sinvalidar');
    errorId = 'error-'+String(elemento);
    let tieneError = document.getElementById(errorId);
    if(tieneError){
      tieneError.remove();
    }
  }
 
  //----Listar Todos los elementos del formulario y validar uno por uno------//
  
   //---- documento ----//
   function validarCurp(idEl){
    const idElemento = idEl;
    let valor = document.getElementById(idElemento).value;
    if( valor == null || valor.length == "" || isNaN(valor)) {
      errorForm(idElemento, 'Debes agregar un Documento válido');
     
      return false;
    } else {
     
      validadoForm(idElemento);

    }
  }
  //---- Nombre ----//
  function validarNombre(idEl){
    const idElemento = idEl;
    let nombre = document.getElementById(idElemento).value;
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
      errorForm(idElemento, 'Por favor ingresa tu nombre');
      return false;
    } else {
      validadoForm(idElemento);
    }
  }
  //----select valid sexo------//
  function valid_select_sexo(idEl){
    const idElement = idEl;
    let valor = document.getElementById(idElement).value;
    if(valor ==0 || valor.length == ""){
      errorForm(idElement,"por favor escoge una opcion");
      return false;
      
    }
    else { 
      validadoForm(idElement);
     
     
    }
  }
 

 //----select valid  estado civil------//
 function valid_estado_civil(idEl){
  const idElement =idEl;
  let valor = document.getElementById(idElement).value;
  if(valor==0 || valor=="" || valor.value==null){
    errorForm(idElement, "por favor complete su estado civil");
  }
  else{
    validadoForm(idElement);
  }
}

 //----select valid  fechanacimiento------//
 function valid_fecha_nacimiento(idEl){
  const idElement =idEl;
  let valor = document.getElementById(idElement).value;
  if(!/^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/.test(valor)){
    errorForm(idElement, "ingrese fecha");
  }
  else{
    validadoForm(idElement);
  }
}


////mostrar mas input por cada cantidad de hijps que escoja
//----select valid  trabajas------//
  function pre_trabajo(idEl){
    const idElement =idEl;
    let valor = document.getElementById(idElement).value;
    if(valor==0 || valor=="" || valor.value==null || valor.value<=-1){
      errorForm(idElement, "por favor complete el campo");
    }
    else{
      validadoForm(idElement);
    }
    if(valor==1){
     
      campo(idElement, '');
    }else{
      alert("entroaca");
      return false;
    }
  }
 
  function valid_estrato(idEl){
    const idElement =idEl;
    let valor = document.getElementById(idElement).value;
    if(valor==0 || valor=="" || valor.value==null || valor.value<=-1){
      errorForm(idElement, "por favor complete el campo");
    }
    else{
      validadoForm(idElement);
      
    }
    if(valor.value==1  || valor.value==2){
      validadoForm(idElement,"felicidades");
    }
    else{

    }
  }


//----select valid  departamento------//
function departamento(idEl){
  const idElement =idEl;
  let valor = document.getElementById(idElement).value;
  if(valor==0 || valor=="" || valor.value==null || valor.value<=-1){
    errorForm(idElement, "por favor ingrese departamento");
  }
  else{
    validadoForm(idElement);
  }
}
//----select valid  ciudad------//
function ciudad(idEl){
  const idElement =idEl;
  let valor = document.getElementById(idElement).value;
  if(valor==0 || valor=="" || valor.value==null || valor.value<=-1){
    errorForm(idElement, "por favor ingrese ciudad");
  }
  else{
    validadoForm(idElement);
  }
}


  //------  Función de validar todo el formulario  ---------//
  function validacion(e){
    
    event.preventDefault(e);
    let formulario = document.getElementById('formulario');
    let camposForm = formulario.getElementsByTagName('input');
    let camposformselect =formulario.getElementsByTagName('select');
    let tieneError;
    let sinvalidar;
    for(i=0; i<camposForm.length; i++){
      tieneError = camposForm[i].classList.contains('error');
      sinvalidar = camposForm[i].classList.contains('sinvalidar');
      
    }
    for(i=0;i<camposformselect.length;i++){
      tieneError = camposformselect[i].classList.contains('error');
      sinvalidar =camposformselect[i].classList.contains('sinvalidar'); 
    }

    if( tieneError || sinvalidar ){
      validarCurp('curp');
      validarNombre('nombre');
      valid_select_sexo('sexo');
      valid_estado_civil('EstadoCivil');
      valid_estrato('Estrato');
      departamento('Departresidencia');
      ciudad('ciudadresidencia');
      valid_fecha_nacimiento('FNacimiento');
      return false;
    }
    
    else {
      /* Enviar formulario y cargar un loader mientras se envia */
      document.getElementById('formulario').submit();
      const loader = '  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> ';
      setTimeout(function(){ 
        formulario.innerHTML = loader; 
      }, 50);
    }

  }