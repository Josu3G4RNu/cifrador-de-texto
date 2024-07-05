let llavesDeEncriptado = new Map();
llavesDeEncriptado.set("e", "enter");
llavesDeEncriptado.set("i", "imes");
llavesDeEncriptado.set("a", "ai");
llavesDeEncriptado.set("o", "ober");
llavesDeEncriptado.set("u", "ufat");


function cifrarTexto() {
    let textoACifrar = document.getElementById('texto_a_operar').value;
    let textoCifrado = "";
    for (let [key, value] of llavesDeEncriptado) {
        textoCifrado = textoACifrar.replaceAll(key, value);
        textoACifrar = textoCifrado;
    }
    mostrarResultado(textoCifrado);
}

function descifrarTexto() {
    let textoADescifrar = document.getElementById('texto_a_operar').value;
    let textoDescifrado = "";
    for (let [key, value] of llavesDeEncriptado) {
        textoDescifrado = textoADescifrar.replaceAll(value, key);
        textoADescifrar = textoDescifrado;
    }
    mostrarResultado(textoDescifrado);
}

function copiarTexto() {
    const contenedor = document.getElementById('texto_resultado');
    let rango= document.createRange();
    rango.selectNode(contenedor);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(rango);
    navigator.clipboard.writeText(contenedor.innerHTML)
        .then(() => {
            alert('Contenido copiado al portapapeles');
            /* Resuelto - texto copiado al portapapeles con éxito */
        }, () => {
            alert('Error al copiar');
            /* Rechazado - fallo al copiar el texto al portapapeles */
        });
}

function mostrarResultado(texto) {
    document.getElementById("main-container__resultado__items").style.display = "none";
    document.getElementById("contenedor-oculto").style.display = "block";
    document.getElementById("texto_resultado").innerHTML = texto;

}
