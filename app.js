let llavesDeEncriptado = new Map();
llavesDeEncriptado.set("e", "enter");
llavesDeEncriptado.set("i", "imes");
llavesDeEncriptado.set("a", "ai");
llavesDeEncriptado.set("o", "ober");
llavesDeEncriptado.set("u", "ufat");


function encriptarTexto() {
    let textoAEncriptar = document.getElementById('texto_a_operar').value;
    for(let [key, value] of llavesDeEncriptado){
        textoAEncriptar = textoAEncriptar.replaceAll(key, value);
    }
    mostrarResultado(textoAEncriptar)
}

function desencriptarTexto() {
    let texto = document.getElementById('texto_a_operar').value;
    for(let [key, value] of llavesDeEncriptado){
        texto = texto.replaceAll(value, key)
    }
    mostrarResultado(texto);
}

function mostrarResultado(texto) {
    document.getElementById("resultado").setAttribute("type", "text");
    document.getElementById("resultado").setAttribute("value", texto);
}
