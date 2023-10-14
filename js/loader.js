function mostrarSpinner() {
    // Seleccionamos el body o al elemento donde que vamos a crearlo. Esto nos servirá para incorporar nuestro spinner
    // dentro de nuestro HTML.
   const containerBtn = document.querySelector(".btn_conteiner");
    // Seleccionamos el formulario de registro para poder ocultarlo durante la carga o no.
   
   
    // Creamos nuestro spinner
    // Ocultamos el boton y agregamos el loader

containerBtn.innerHTML=`
    <div class="loader">
    <div style="--i: 1"></div>
    <div style="--i: 2"></div>
    <div style="--i: 3"></div>
    <div style="--i: 4"></div>
    </div>`
const loader = document.querySelector(".loader");

    // cambiamos atributos del loader y/o del div contenedor

    
    containerBtn.style.padding="45px 0";
   
   return;
   }  
   
// modificar esta funcion...

function ocultarSpinner() {
// Seleccionamos el body para poder remover el spinner del HTML.
const body = document.querySelector("body");
// Seleccionamos el formulario de registro para poder mostrarlo nuevamente
const form = document.querySelector(".button");
// Seleccionamos el spinn
const spinnerContainer = document.querySelector(".loader");
// Removemos el spinner del HTML
body.removeChild(spinnerContainer);

// Quitamos la clase que oculta el formulario
form.classList.remove("hidden");
    return;
}

// cuando inciamos sesion aparece el loader, validamos los datos ingresados y nos dirigimos hacia la pagina web HOME -->

const button = document.querySelector("button");
button.addEventListener('click', mostrarSpinner);






/*
            Nuestra función recibirá dos argumentos:
            
            1) En primer lugar, la cantidad de skeletons que queremos
            mostrar;
            2) En segundo lugar, el contenedor dentro del cual queremos incluir
            los skeletons
            Por ejemplo, si queremos mostrar 5 skeletons dentro
            del siguiente contenedor:
            
            <ul class="tareas-pendientes"></ul>
            
            al invocar la función le podremos pasar los siguientes argumentos:
            
            renderizarSkeletons(5, ".tareas-pendientes")
            
            */      
            
           /*  function renderizarSkeletons(cantidad, contenedor){
               const contenedorTareas = document.querySelector(contenedor);
               // Creamos un array que tendrá un lenght igual a la cantidad de
               //skeletons que queremos renderizar
               const skeletons = Array.from({ length:cantidad });
               // Iteramos sobre el array accediendo a cada elemento

               skeletons.forEach(() => {
                  // Guardamos el HTML de cada skeleton. Agregamos una clase con el selector del contenedor
                  // Esto nos permitirá luego poder eliminar los skeletons de dicho contenedor
                  const template =`
                  <li class="skeleton-container ${contenedor.replace(".", "")}-child">
                  <div class="skeleton-card">
                  <p class= "skeleton-text"></p>
                  <p class="skeleton-text"></p>
                  </div>
                  </li>
                  `
                   // Insertamos el HTML dentro del contenedor
                   contenedorTareas.innerHTML += template; 
               });
              
            } */
               
            /*
            Esta función recibirá el nombre del contenedor dentro del cual
            se encuentran los skeletons que deseamos remover.*/

           /*  function removeSkeletons(contenedor){
               // Seleccionamos el contenedor
            const contenedorTareas = document.querySelector(contenedor);
            // Seleccionamos todos los skeletons dentro de ese contenedor
            const skeletons = document.querySelectorAll(`${contenedor}-child`);
            skeletons.forEach((skeleton) => contenedorTareas.removeChild(skeleton));
            
            } */

                  