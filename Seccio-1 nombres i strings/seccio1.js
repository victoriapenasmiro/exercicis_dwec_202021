/**
 * 01 Numero signe
 * Escriu un codi que indiqui si un nombre introduït per l’usuari és positiu, negatiu o igual a 0
*/
function numeroSigne() {
    //declaro una variable local para recoger el valor introducido en el input1
    let valor = document.getElementById("input1").value;

    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else if (valor > 0) {
        document.getElementById("results").innerHTML = "ES POSITIU";
    } else if (valor < 0) {
        document.getElementById("results").innerHTML = "ES NEGATIU";
    } else if (valor == 0) {
        document.getElementById("results").innerHTML = "ES ZERO";
    } else {
        document.getElementById("results").innerHTML = "La dada introduida no es un nombre";
    }
}

/**
 * 02 Es número
 * Escriu un codi que verifiqui si el que introdueix l’usuari en una casella és un nombre
*/
function esNumero() {
    let valor = document.getElementById("input1").value;

    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else if (isFinite(valor)) {
        document.getElementById("results").innerHTML = "Es un nombre";
    } else {
        document.getElementById("results").innerHTML = "No es un nombre";
    }
}

/**
 * 03 Número part entera
 * Escriu un codi que donat un número real, mostri només la part sencera (esborri els decimals).
 * Exemple:  3.1515 →  3
*/
function numeroEnter() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else if (!isFinite(valor)) {
        document.getElementById("results").innerHTML = "El valor indicat no es un nombre, per favor, indica un nombre.";
    } else {
        document.getElementById("results").innerHTML = parseInt(valor);
    }
}

/**
 * 04 Numero part decimals
 * Escriu un codi que donat un numero real, mostri només els decimals.
 * Ex:   3.1415 →  1415
*/
function numeroDicemals() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else if (!isFinite(valor)) {
        document.getElementById("results").innerHTML = "El valor indicat no es un nombre, per favor, indica un nombre.";
    } else {
        document.getElementById("results").innerHTML = parseFloat(valor) % 1;
    }
}

/**
 * 05 xx_amb 3 decimals
 * Escriu un codi que divideixi per 19 el número introduït i mostri el resultat exactament amb 3 decimals
*/
function tresDecimals() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else if (!isFinite(valor)) {
        document.getElementById("results").innerHTML = "El valor indicat no es un nombre, per favor, indica un nombre.";
    } else {
        let res = valor / 19;
        document.getElementById("results").innerHTML = res.toFixed(3);
    }
}

/**
 * 06 String buit
 * Escriu un codi que digui si un string és buit o no
*/
function stringBuit() {
    let valor = document.getElementById("input1").value;
    if (valor === ""){
        document.getElementById("results").innerHTML = "Està buit";
    } else if (valor.trim() === ""){
        document.getElementById("results").innerHTML = "Només s'han carregat espais en blanc, el string está buit";
    } else {
        document.getElementById("results").innerHTML = "No està buit";
    }
}

/**
 * 07 Invertir string
 * Escriu un codi que inverteixi un string. 
 * Exemple:  casa →  asac
 * Step by step explanation:
 * Step 1. Use the split() method to return a new array
 * var splitString = str.split(""); // var splitString = "hello".split("");
 * ["h", "e", "l", "l", "o"]
 * Step 2. Use the reverse() method to reverse the new created array
 * var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 * ["o", "l", "l", "e", "h"]
 * Step 3. Use the join() method to join all elements of the array into a string
 * var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
 * "olleh"
*/
function invertirString() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = valor.split("").reverse().join("");
    }
}

/**
 * 08 Quantes a
 * Escriu un codi que compti el número d’ocurrències de la lletra “a” que hi ha en un string
*/
function comptarA() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        let countA = 0;
        for (let i = 0; i < valor.length ; i++){
            if (valor.toUpperCase().charAt(i) == "A"){
                countA++;
            }
        }
        document.getElementById("results").innerHTML = "En el string carregat hi ha " + countA + " lletres a."
    }
}

/**
 * 09 Abans a
 * Escriu un codi que extregui els caràcters que hi ha abans de la primera ocurrència de la lletra “a”.  
 * Exemple:  “Ordinador personal”  →  “Ordin”
*/
function abansA() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        let positionA = valor.toUpperCase().indexOf("A");
        document.getElementById("results").innerHTML = valor.slice(0,positionA);
    }
}

/**
 * 10 Primera i darrera a
 * Escriu un codi que retorni en quina posició se troba la primera i l'última ocurrència de la lletra “a” en un string
*/
function primeraDarrera() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        let primera = valor.toUpperCase().indexOf("A");
        let darrera = valor.length-1;
        // busco la última a empezando por el final de la string
        for (let i = darrera;i>=0; i--){
            if (valor.toUpperCase().charAt(i) == "A"){
                darrera = i;
                break;
            }
        }
        if (darrera != primera){
            document.getElementById("results").innerHTML = "La primera a es troba en la posició: "
            + primera + " y la darerra en la posició: " + darrera;
        } else {
            document.getElementById("results").innerHTML = "Només hi ha una lletra A i està en la posició " + primera;
        }
    }
}

/**
 * 11 Esborra substring
 * Escriu un codi que extregui totes les ocurrències de “la” a dins d’un String.  
 * Exemple:  “Es la artista mas aclamada”  →  “Es  artista mas acmada”
*/
function esborraSubstring() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        // /g --> para sustituir todas e /i para que no tenga en cuenta el case
        document.getElementById("results").innerHTML = valor.replace(/LA/gi,"");
    }
}

/**
 * 12 substitueix substring
 * Escriu un codi que substitueixi totes les ocurrències de “la” a dins d’un String per un asterisc 
*/
function subsString() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = valor.replace(/LA/gi,"*");
    }
}

/**
 * 13 Cap i cua
 * Escriu un codi que donat un String, creï un nou string a partir del primer
 * en el qual se li hagi afegit al principi i al final la primera lletra d’aquell string.
 * Exemple  “hola”  →  “hholah”
*/
function capCua() {
    let valor = document.getElementById("input1").value;
    let primera = null;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        primera = valor.charAt(0);
        valor = primera + valor + primera;
        document.getElementById("results").innerHTML = valor;
    }
}

/**
 * 14 No espais
 * Escriu un codi que elimini tots els espais d’un String
 * Exemple:  “    aixo es una prova    ” → “aixoesunaprova”
*/
function eliminarEspais() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = valor.trim().split(" ").join("");
    }
}

/**
 * 15 frase amb guions
 * Escriu un codi que converteixi un String format per paraules separades per un o
 * varis espais en un String en què les paraules estiguin separades per un guió. 
 * Exemple:     “aixo es       una   prova”  →  “aixo-es-una-prova”
*/
function fraseGuions() {
    let valor = document.getElementById("input1").value;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = valor.split(" ").join("-");
    }
}

/**
 * 16 Acronim
 * Escriu un codi que agafi totes les paraules d’un String i construeixi un acrònim en majúscules.   
 * Exemple:  “alguns cans miren enfora”   →   “ACME”
*/
function constAcronim() {
    let valor = document.getElementById("input1").value;
}

/**
 * 17 Email
 * Escriu un codi que validi en un correu electrònic només les següents coses: 
i. té una sola @
ii. el servidor té una extensió .net,.org o .com
iii. L'extensió està després de la @, no abans. No val emprar expressions regulars! .   
Exemple:  abcd@abcd.org  →  Sí es una direcció de correu
*/
function validarEmail() {
    let valor = document.getElementById("input1").value;
}