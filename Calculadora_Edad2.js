console.log ("Este programa es una calculadora de edad, por favor, edite la fecha de nacimiento en la línea de abajo");
const fechaNacimiento = "29/02/2000";                                           // (EDITAR) Ingrese fecha de nacimiento con formato numérico DD/MM/AAAA
const fechaHoy = new Date();                                                    // Se instancia la fecha actual con new Date();
const diaHoy = fechaHoy.getDate();                                              // Obtiene el día actual
const mesHoy = fechaHoy.getMonth() +1;                                          // Obtiene el mes actual sumando +1 para convertirlo correctamente
const annioHoy = fechaHoy.getFullYear();                                        // Obtiene el año actual
console.log (`Hoy es ${diaHoy}/${mesHoy}/${annioHoy}`);                         // Imprime en pantalla la fecha actual separada por '/'

const partes = fechaNacimiento.split("/");                                      // Separar la fecha inicial separada por '/' y convertir en arreglo 
if (partes.length !== 3) {                                                      // Verificar que el formato sea DDMMAAAA
    console.log("Formato inválido. Usa DD/MM/AAAA.");           
} else {                                                                        // Si el formato es el correcto, convierte el arreglo en unidades enteras: día, mes y año respectivamente
    const diaNac = parseInt(partes[0], 10);
    const mesNac = parseInt(partes[1], 10);
    const annioNac = parseInt(partes[2], 10);

    if (isNaN(diaNac) || isNaN(mesNac) || isNaN(annioNac)) {                    // Verificar que las unidades sean números
        console.log("La fecha contiene valores no numéricos."); 
    } else if (annioNac < 1900 ||                                               // Verificar casos en los que el año sea muy antiguo o una fecha futura
    annioNac > annioHoy ||
    (annioNac === annioHoy && mesNac > mesHoy) ||
    (annioNac === annioHoy && mesNac === mesHoy && diaNac > diaHoy)) {          
        console.log("La fecha debe estar entre 1900 y el día de hoy.");
    } else if (mesNac < 1 || mesNac > 12 || diaNac < 1 || diaNac > 31) {        // Verificar casos para dias y meses fuera del rango 1-31 y 1-12 respectivamente
        console.log("La fecha ingresada no es válida.");
    } else {
        const fechaNacimiento = new Date(annioNac, mesNac - 1, diaNac);         // Si todo está correcto, valida la fecha utilizando objeto Date: usa mes con 01 de base, se debe restar 1 para la conversión
        if (                                                                    // Compara la fecha de nacimiento ingresada con la fecha real para verificar si existe
            fechaNacimiento.getFullYear() !== annioNac ||
            fechaNacimiento.getMonth() !== mesNac - 1 ||                        // Se debe restar 1 para la conversión correcta, ya que 'Date' usa base 0
            fechaNacimiento.getDate() !== diaNac
        ) {
            console.log("La fecha ingresada no existe.");        
        } else {                                                                // Si la fecha es correcta, entonces se procede con la operación                                                                
            if ((annioNac % 4 === 0 && annioNac % 100 !== 0) ||                 // Si el año de nacimiento es bisiesto se menciona en el programa
            (annioNac % 400 === 0)){
                console.log(`Tu año de nacimiento ${annioNac} es bisiesto`);

            }             
            let edad = annioHoy - annioNac;                                     // Se hace el cálculo restando el año actual con el año de nacimiento
            if (                                                                // Se verifica si ha cumplido años en el año actual o no
                mesNac > mesHoy ||
                (mesNac === mesHoy && diaNac > diaHoy)
            ) {
                edad--;
            }
            if (diaNac === diaHoy && mesNac === mesHoy){                        // Si el coincide la fecha de nacimiento con la actual, se felicita al usuario
                console.log(`¡Feliz cumpleaños! Ya tienes ${edad} años.`);
            }
            else {
                console.log(`Tienes ${edad} años.`);                            // Muestra un mensaje con la edad actual del usuario
            }           
        }
    }
}
