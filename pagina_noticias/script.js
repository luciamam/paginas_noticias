let contenedor_hamburguesa = document.querySelector("#contenedor-menu-hamburguesa")
let contenedor_navegacion = document.querySelector("#contenedor-navegacion")
let iconos_menu_hamburguesa = document.querySelectorAll("#contenedor-menu-hamburguesa .fa-solid")
let icono_barra = iconos_menu_hamburguesa[0]
let icono_x = iconos_menu_hamburguesa[1]
let esta_el_menu_activado = false;
let contenedor_filtro = document.querySelector("#contenedor-efecto")


contenedor_hamburguesa.addEventListener("click", ()=>{
    esta_el_menu_activado = !esta_el_menu_activado

    if (esta_el_menu_activado){
        contenedor_navegacion.style.right = 0;
        icono_barra.style.display = "none"
        icono_x.style.display = "block"
        document.getElementsByTagName("body")[0].style.overflow = "hidden" // Devuelve un node list
        contenedor_filtro.style.display="block"

    }
    else{
        contenedor_navegacion.style.right = "-100%";
        icono_barra.style.display = "block"
        icono_x.style.display = "none"
        contenedor_filtro.style.display="none"
        document.getElementsByTagName("body")[0].style.overflow = "scroll"

    }
    
    
})