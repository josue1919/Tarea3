contador=1;
//ejecuto la funcion automatica
function automatico(tipo){
 
    const formulario=document.querySelector("#formulario");
   

    console.log(formulario);

    //definimos el contenedro hijo
    const contenido=document.createElement('section');
    contenido.className="contenido"
  

    



    //creamos los inputs
    const input=document.createElement('input');
    const boton=document.createElement('button');
   
  
    if(tipo=="checkbox"){
    boton.className="btn btn-danger ";
    boton.innerHTML='<i class="fas fa-trash-alt"></i>';
    input.type=tipo;
        var label=document.createElement('label');
        label.innerText=`opcion ${contador}`;
        
        contenido.appendChild(input);
        contenido.appendChild(label);
        contenido.appendChild(boton);
        formulario.appendChild(contenido);
        contador++;

    }

    if(tipo=="select"){
        boton.className="btn btn-danger ";
        boton.innerHTML='<i class="fas fa-trash-alt"></i>';
        const select=document.createElement('select');
        const option1=document.createElement('option');
        option1.innerText="option1"
        const option2=document.createElement('option');
        option2.innerText="option2"
        select.append(option1,option2)
        contenido.appendChild(select);
        contenido.appendChild(boton);
        formulario.appendChild(contenido);

    }
    


    if(tipo=="text"||tipo=="number"||tipo=="date"||tipo=="file"){
        input.className='form-control';
    boton.className="btn btn-danger ";
    boton.innerHTML='<i class="fas fa-trash-alt"></i>';
    input.type=tipo;
    contenido.appendChild(input);
    contenido.appendChild(boton);
    formulario.appendChild(contenido);
    }

    if(tipo=="button"){
        boton.className="btn btn-danger ";
        boton.innerHTML='<i class="fas fa-trash-alt"></i>';

        const btnButton = document.createElement("input")
    btnButton.setAttribute("type","button")
    btnButton.value="soy un boton";
    btnButton.className="btn btn-success";
    contenido.appendChild(btnButton);
    contenido.appendChild(boton);
    formulario.appendChild(contenido);

    }

    //agregamos alos padres

   
 

 

    boton.addEventListener('click',()=>{
        formulario.removeChild(contenido);
    })

}



var botones = document.querySelectorAll('.btn');
console.log(botones)

botones.forEach(element => {
    element.addEventListener('click',()=>{

        automatico(element.id);//pasamos como parametro el id
        console.log('boton '+element.id)
        
    })
});



