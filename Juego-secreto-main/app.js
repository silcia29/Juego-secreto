 
let numero_secreto = 0
let intentos = 0 
let numeroMaximoPosible = 10
let lista_numeros_sorteados = []

console.log(numero_secreto)

function asignar_texto_elemento(elemento,texto)  {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
    return
}


function verificar_intento()   {
    let numero_de_usuarios = parseInt(document.getElementById(`valor_usuario`).value)
   // console.log(intentos)
    if
    (numero_de_usuarios === numero_secreto)  {
        
        asignar_texto_elemento(`p`,`Acertaste el numero en ${intentos}  ${(intentos === 1) ? `vez` : `veces`  }`)
        
        document.getElementById("reiniciar").removeAttribute("disabled")
        
    } else{
        // El usuario no acerto
        if(numero_de_usuarios > numero_secreto)     {
            
            asignar_texto_elemento(`p`,`El numero secreto es menor `)  
        } else              {
            
            asignar_texto_elemento(`p`,`El numero secreto es mayor`)  
        }
        intentos++
        limpiarCaja()
    }
    return
}

function limpiarCaja( )     {
    document.querySelector("#valor_usuario").value = ``
    
}


function generar_numeros_secretos() {

    let numero_generado = Math.floor(Math.random()*numeroMaximoPosible)+1

    console.log(numero_generado)

    console.log(lista_numeros_sorteados)
    // si ya sorteamos todos los numeros
    if(lista_numeros_sorteados.length == numeroMaximoPosible)   {
       asignar_texto_elemento("p", "Ya se sortearon todos los numeros posibles")

    } else  {
        //si el numero generado esta incluido en la lista
        
        if (lista_numeros_sorteados.includes(numero_generado)){
            return generar_numeros_secretos()
        } else  {
            lista_numeros_sorteados.push(numero_generado)
            return numero_generado
        }
    }
}

function condiciones_iniciales( )    {
    asignar_texto_elemento(`h1`, "juego del numero secreto")
    asignar_texto_elemento(`p`, `Indica un numero del 1 al ${numeroMaximoPosible}`)
    numero_secreto = generar_numeros_secretos()
    intentos = 1
    console.log(numero_secreto)
    
    
}

function reiniciar_juego()  {
    
    //limpiar la caja
    limpiarCaja()
    //indicar mensaje de intervalo de numeros
    condiciones_iniciales()
    //generar numero aletorio
    //inicializar el numero de intentos
    //deshabilitar el boton de nuevo juego
    //document.querySelector("#reiniciar_juego").setAttribute("disabled", "true")
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condiciones_iniciales()


