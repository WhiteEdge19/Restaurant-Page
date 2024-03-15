import { mostrarHome } from "./codigosdepaginas/home.js";
import { mostrarMenu } from "./codigosdepaginas/menu.js";
import './style.css' ;
const botonHeader = document.querySelector("header");


let espacioaMostrar=document.querySelector(".container");

botonHeader.addEventListener('click',(event)=>{
    const botonClikeado = event.target;

    switch (botonClikeado.value) {
        case "home":            
            espacioaMostrar.innerHTML=``;            
            mostrarHome(); 
            console.log("home");
            break;
        
        case "menu":
            
            espacioaMostrar.innerHTML=``;
            mostrarMenu();
            console.log("menu");
            break;
    
        default:
            break;
    }
})