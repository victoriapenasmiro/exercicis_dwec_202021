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
    }else {
        document.getElementById("results").innerHTML = "La dada introduida no es un nombre";
    }
}

/**
 * 02 Es número
 * Escriu un codi que verifiqui si el que introdueix l’usuari en una casella és un nombre
*/
function esNumero() {

}

/**
 * 03 Número part entera
 * Escriu un codi que donat un número real, mostri només la part sencera (esborri els decimals).
 * Exemple:  3.1515 →  3
*/
function numeroEnter() {

}

/**
 * 04 Numero part decimals
 * Escriu un codi que donat un numero real, mostri només els decimals.
 * Ex:   3.1415 →  1415
*/
function numeroDicemals() {

}

/**
 * 05 xx_amb 3 decimals
 * Escriu un codi que divideixi per 19 el número introduït i mostri el resultat exactament amb 3 decimals
*/
function tresDecimals() {

}

/**
 * 06 String buit
 * Escriu un codi que digui si un string és buit o no
*/
function stringBuit() {

}

/**
 * 07 Invertir string   Escriu un codi que inverteixi un string. 
 * Exemple:  casa →  asac
*/
function invertirString() {

}

/**
 * 08 Quantes a
 * Escriu un codi que compti el número d’ocurrències de la lletra “a” que hi ha en un string
*/
function comptarA() {

}

/**
 * 09 Abans a
 * Escriu un codi que extregui els caràcters que hi ha abans de la primera ocurrència de la lletra “a”.  
 * Exemple:  “Ordinador personal”  →  “Ordin”
*/
function abansA() {

}

/**
 * 10 Primera i darrera a
 * Escriu un codi que retorni en quina posició se troba la primera i l'última ocurrència de la lletra “a” en un string
*/
function primeraDarrera() {

}

/**
 * 11 Esborra substring
 * Escriu un codi que extregui totes les ocurrències de “la” a dins d’un String.  
 * Exemple:  “Es la artista mas aclamada”  →  “Es  artista mas acmada”
*/
function esborraSubstring() {

}

/**
 * 12 substitueix substring
 * Escriu un codi que substitueixi totes les ocurrències de “la” a dins d’un String per un asterisc 
*/
function subsString() {

}

/**
 * 13 Cap i cua
 * Escriu un codi que donat un String, creï un nou string a partir del primer en el qual se li hagi afegit al principi i al final la primera lletra d’aquell string.
 * Exemple  “hola”  →  “hholah”
*/
function capCua() {

}

/**
 * 14 No espais
 * Escriu un codi que elimini tots els espais d’un String
 * Exemple:  “    aixo es una prova    ” → “aixoesunaprova”
*/
function eliminarEspais() {

}

/**
 * 15 frase amb guions
 * Escriu un codi que converteixi un String format per paraules separades per un o varis espais en un String en què les paraules estiguin separades per un guió. 
 * Exemple:     “aixo es       una   prova”  →  “aixo-es-una-prova”
*/
function fraseGuions() {

}

/**
 * 16 Acronim
 * Escriu un codi que agafi totes les paraules d’un String i construeixi un acrònim en majúscules.   
 * Exemple:  “alguns cans miren enfora”   →   “ACME”
*/
function constAcronim() {

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

}