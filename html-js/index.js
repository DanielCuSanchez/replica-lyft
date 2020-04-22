//alert('Hola mundo!')

console.log('Hola desde consola!')
const NOMBRE = prompt("Ingresa tu nombre")



function aparecer() {
    let miEtiqueta = document.getElementById('texto')
    miEtiqueta.innerHTML = ` <h1> Hola ${NOMBRE} !!!</h1> `
    miEtiqueta.style.fontFamily = 'Arial'
    miEtiqueta.style.color = 'black'
    miEtiqueta.style.display = 'flex'
    miEtiqueta.style.justifyContent = 'center'
}

function desaparecer() {
    let texto = document.getElementById('texto')
    texto.innerHTML = ''
    texto.style.border = 'none'
}

function cambiarColor() {
    let texto = document.getElementById('texto')

    if (texto.innerHTML === '') {
        return
    }
    else {
        texto.style.backgroundColor = dameUnColorRandom()
        texto.style.color = dameUnColorRandom()
        texto.style.border = `10px solid ${dameUnColorRandom()}`
    }

}


function dameUnColorRandom() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}
