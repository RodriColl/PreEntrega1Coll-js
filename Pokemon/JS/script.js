let inicio

    if (inicio = confirm("TU AVENTURA POKEMON.\n ¿Estas listo?")){
        alert("¡Vamos a comenzar!")
    }else {
        alert("¡No le temas!")
    } 

alert("A través de praderas extensas y montañas imponentes, se despliega un mundo donde la aventura aguarda en cada esquina. POKEMON y entrenadores se preparan para desafiar lo desconocido y alcanzar la grandeza.")

//Validación nombre de usuario
function validarNombre(nombre) {
    if (nombre === null) {
        return "null";
    } else if (!isNaN(nombre)) {
        return "numero";
    } else if (nombre.length < 3) {
        return "corto";
    } else {
        return "valido";
    }
}

let nombre;
let resultado;

do {
    nombre = prompt("Dime, pequeño futuro entrenador, ¿cómo te llamas?");
    resultado = validarNombre(nombre);

    switch (resultado) {
        case "null":
            alert("Por lo que veo, no has ingresado ningún nombre");
            break;
        case "numero":
            alert("Un nombre no tiene números");
            break;
        case "corto":
            alert("Tu nombre debe tener 3 letas como mínimo");
            break;
        default:
            break;
    }
} while (resultado !== "valido");

alert("¡Saludos " + nombre + "! Soy el profesor Oak.");
console.log("Nombre = " + nombre)

alert("Prof Oak: ¡Este mundo está habitado por unas criaturas llamadas POKEMON! Para algunos, los POKEMON son mascotas. Pero otros los usan para pelear. En cuanto a mí... Estudio a los POKEMON como profesión. Pero tú, tu eres un futuro entrenador, ¿estas listo para tu aventura?")

//Validación nombre de pokemon
let pokebola = prompt("Porf Oak: Para enfrentarte a tus oponentes debes tener un POKEMON, vamos a encontrarte uno, para ello selecciona una de las siguientes pokebolas. (Ingresa el numero correspondiente)\n\n 1-Pokebola\n 2-Pokebola\n 3-Pokebola")

switch (pokebola){
    case "1":
        for (i=3; i>=1; i--)
                alert(i + "...")
                    alert("¡Felicitaciones! " + nombre + " has conseguido a CHARMANDER")
                    console.log("CHARMANDER")
        break;
    case "2":
        for (i=3; i>=1; i--)
                alert(i + "...")
                    alert("¡Felicitaciones! " + nombre + " has conseguido a SQUIRTLE")
                    console.log("SQUIRTLE")
        break;
    case "3":
        for (i=3; i>=1; i--)
                alert(i + "...")
                    alert("¡Felicitaciones! " + nombre + " has conseguido a BULBASAUR")
                    console.log("BULBASAUR")
        break;
        default:
            break;
}

alert("Prof Oak: Ahora sal a la aventura y conviertete en el mejor entrenador de POKEMON")








