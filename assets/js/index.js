let imagen = document.getElementById("imag")
function bordes() {
    if(imagen.classList.contains('borde')){
        imagen.classList.remove('borde')
    }else{
        imagen.classList.add('borde')
    }
}



function resultado(){

let in1 = document.getElementById('inp1').valueAsNumber
let in2 = document.getElementById('inp2').valueAsNumber
let in3 = document.getElementById('inp3').valueAsNumber
let total = in1+in2+in3

    if(total <= 10){
        document.getElementById("res").innerHTML = "Llevas: "+total+" stickers"
    }
    else{
        document.getElementById("res").innerHTML = "Llevas demasiados stickers"
    }
}

function pass(){
    let sel1 = document.getElementById("sl1")
    let sel2 = document.getElementById("sl2")
    let sel3 = document.getElementById("sl3")

    let s1 = sel1.options[sel1.selectedIndex].value
    let s2 = sel2.options[sel2.selectedIndex].value
    let s3 = sel3.options[sel3.selectedIndex].value
    
    if(s1 == 9 && s2 == 1 && s3 == 1){
        document.getElementById("parr").innerHTML = "password 1 es correcto"
    }else if(s1 == 7 && s2 == 1 && s3 == 4){
        document.getElementById("parr").innerHTML = "password 2 es correcto"
    }else{
        document.getElementById("parr").innerHTML = "password incorrecto, seleccione otro"
    }
}