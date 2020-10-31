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
        document.getElementById("results").innerHTML = valor.trim().split(" ").join("-");
    }
}

/**
 * 16 Acronim
 * Escriu un codi que agafi totes les paraules d’un String i construeixi un acrònim en majúscules.   
 * Exemple:  “alguns cans miren enfora”   →   “ACME”
*/
function constAcronim() {
    let valor = document.getElementById("input1").value;
    var paraules,acronim = null;
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        paraules = valor.trim().split(" ");
        for (paraula of paraules) {
            if (paraula == paraules[0]){
                acronim = paraula.charAt(0);
            } else{
                acronim += paraula.charAt(0);
            }
        }
        document.getElementById("results").innerHTML = acronim;
    }
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
    let valid = true;
    let arroba = null;
    let extensio = valor.substr(valor.length-5);
    if (valor == null || valor.length == 0) {
        alert("per favor, indica un valor");
    } else {
        //validació @
        if (valor.indexOf("@") != -1){
            for (let i = valor.indexOf("@"); i < valor.length; i++){
                if (valor.charAt(i) == '@'){
                    arroba++;
                }
                if (arroba > 1){
                    valid = false;
                    break;
                }
            }
            //validació extensió
            if (valid && valor.lastIndexOf(".net") == -1 && valor.lastIndexOf(".org") == -1 && valor.lastIndexOf(".com") == -1){
                valid = false;
            }
            //ultima posición
            if (valid && valor.lastIndexOf(".net") < valor.length-5 && valor.lastIndexOf(".org") < valor.length-5 && valor.lastIndexOf(".com") < valor.length-5){
                valid = false;
            }
            //validación que després de @ no ve seguidamente l'extensió, ya que no seria correcta
            if (extensio.charAt(0) == "@"){
                valid = false;
            }
        }else{
            valid = false;
        }
    }
    if(valid){
        document.getElementById("results").innerHTML = "Si és un correu eletrònic";
    }else{
        document.getElementById("results").innerHTML = "No és un correu eletrònic";
    }
}

/**
 * Exercicis arrays
 * 01 - Crea un codi JS que ordeni un Array de Strings alfabèticament
 */
function strOrdenaMajor(){
    let llista = document.getElementById("input1").value;
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = llista.split(",").sort();;
    }
}

/**
 * 02 - Ordena de menor a major un array de números
 */
function numOrdenaMajor(){
    let llista = document.getElementById("input1").value;
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = llista.split(",").sort(function(a, b){return a-b});
    }
}

/**
 * 03 - Ordena de major a menor un array de números
 */
function numOrdenaMenor(){
    let llista = document.getElementById("input1").value;
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = llista.split(",").sort(function(a, b){return b-a});
    }
}

/**
 * 04 - Crea un codi JS que ordeni un Array de Strings de manera que aquells elements amb
 * strings més llargs estiguin davant.
 * Exemple: [“kiwi”,”apple”,”strawberry”]  →  [“strawberry”,”apple”,”kiwi”]
 */
function strOrdenaPerLong(){
    let sortByLength = function (a, b) {
        return a.length - b.length;
      };
    let llista = document.getElementById("input1").value;

    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = llista.split(",").sort(sortByLength);
    }
}

/**
 * 05 - Crea un codi JS que a partir d’un Array de Strings obtengui un array paral·lel
 * amb les longituts dels elements.
 * Exemple: [“kiwi”,”apple”,”strawberry”]  →  [4, 5, 9]
 */
function strArrayLongituds(){
    let llista = document.getElementById("input1").value;
    let newLlista = new Array();
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        llista.split(",").forEach(element => newLlista.push(element.length));
        document.getElementById("results").innerHTML = newLlista;
    }
}

/**
 * 06 - Escriu un codi JS que en passar-li un array de paraules,
 * crei un String amb aquestes paraules separades per espais,
 * però sense afegir guions al principi i al final del String
 * Exemple:  [“hola”, “que”, “tal”]    →   “hola-que-tal”
 */
function strCreaFraseGuions(){
    let llista = document.getElementById("input1").value.split(" ");
    let newValor = null;
    let valor = function concat(element, index, array){
        if (index == 0){
            newValor = element;
        } else {
            newValor += "-" + element;
        }
    }

    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        llista.forEach(valor);
        document.getElementById("results").innerHTML = newValor;
    }
}

/**
 * 07 - Fer un codi que agafi totes les paraules d’un Array de Strings i
 * construeixi un acrònim en majúscules. 
 * Exemple:  [“alguns”, “cans”, “miren”, “enfora”]  →  “ACME”
 */
function strCreaAcronim(){
    let llista = document.getElementById("input1").value.split(" ");
    let newValor = "";
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        llista.forEach(valor => newValor += valor.charAt(0).toUpperCase());
        document.getElementById("results").innerHTML = newValor;
    }
}

/**
 * 08 - Escriu un codi JS que elimini d’un Array de Strings
 * tots aquells elements que tenguin una longitud inferior a 5
 */
function strFiltreLongitud(){
    let llista = document.getElementById("input1").value.split(" ");
    
    /*Al eliminar un elemento de la array, todo los elementos se mueven una posición
    por lo que al eliminar un elemento, hay que mover el indice una posición atras.*/

    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        for (let i = 0; i < llista.length; i++){
            if (llista[i].length < 5){
                llista.splice(i,1);
                i = i - 1;
            }
        }
        document.getElementById("results").innerHTML = llista;
    }
}

/**
 * 09 - Obtén la suma total d’un array de números emprant el mètode forEach()
 */
function numSumaForeach(){
    let llista = document.getElementById("input1").value.split(" ");
    let total = 0;
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        llista.forEach( valor => total += parseInt(valor));
        document.getElementById("results").innerHTML = total;
    }

}

/**
 * 10 - Escriu un codi JS que calculi el número de vegades que apareix exactament
 * l’string “la” en un array.
 * Exemple:  [“la”, “o”, “lama”, “t”, “la”, “bela”] → 2
 */
function strOcurrencies(){
    let llista = document.getElementById("input1").value.split(" ");
    let total = 0;
    let calcularTotal = function (valor) {
        if (valor == "la"){
            total++;
        }
    }
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        llista.forEach(calcularTotal);
        document.getElementById("results").innerHTML = total;
    }
}
/**
 * 11 - Obtén la suma total d’un array de números emprant el mètode reduce()
 * 
 * @see https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
 */
function numSumaReduce(){
    /* Elimino espacios de la string antes de convertir a array porqué si existe un espacio al principio
    o al final, ocupa una posicion de la array, y al intentar sumar un numero a vacío devuelve NaN. */
    let llista = document.getElementById("input1").value.trim().split(" ").map(function(num){
        return parseInt(num);
    });

    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        document.getElementById("results").innerHTML = llista.reduce(sumaTots);
    }
    
    function sumaTots(total, num) {
        return total + num;
    }
}

/**
 * 12 - Obté el valor numèric més alt d’un array emprant forEach
 */
function numMaxForeach(){
    let llista = document.getElementById("input1").value.split(" ");
    let valorMax = 0;
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        llista.forEach(function(valor){
            if (parseInt(valor) > valorMax){
                valorMax = parseInt(valor);
            }
        });
        document.getElementById("results").innerHTML = valorMax;
    }
}

/**
 * 13 - Escriu un codi JS que creï un Array nou agafant el primer i el darrer element d’un Array
 * i col·locant-los al centre de l’Array.
 * (Per fer aquest exercici, donarem per suposat que sempre se tractarà d’un Array
 * amb un número parell de posicions)
 * Exemple:  [“a”, “b”, “c”, “d”, “e”, “f”]   →    [“b”, “c”, “a”, “f”, “d”, “e”,]
 */
function restructuraArray(){
    let llista = document.getElementById("input1").value.split(" ");
    let primero = llista.shift();//elimino el primer valor
    let ultimo = llista.pop();//elimino el ultimo valor
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else {
        llista.splice((llista.length/2),0,primero);
        llista.splice((llista.length/2)+0.5,0,ultimo);
        document.getElementById("results").innerHTML = llista;
    }
}

/**
 * Escriu un codi JS que donat un array de números, retalli els tres primers elements de l’array
 * i els col·loqui al final en ordre invertit.
 * Exemple:  [1,5,8,3,4]  → [3,4,8,5,1]
 */
function capCuaArray(){
    let llista = document.getElementById("input1").value.split(" ");
    let tresNum = new Array();
    if (llista == null || llista.length == 0) {
        alert("per favor, indica un valor");
    } else if (llista.length < 4){
        alert("per favor, al manco has d'indicar 4 nombres");
    } else {
        for (let i = 0; i < 3; i++){
            tresNum.push(llista[i]);
        }
        llista.splice(0,3); //elimino los tres primeros numeros
        llista.push(tresNum.reverse()); //añado los tres num al final
        document.getElementById("results").innerHTML = llista;
    }
}