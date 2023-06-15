const entrada = document.getElementById('in'),
boton = document.getElementById('calcular'),
pantalla = document.getElementById('respuesta');

var x,
operacion,
potenciacion,
multi1,
multi2,
sum,
resul;

boton.addEventListener('click',() => {
    x = entrada.value;
    if (x !== "") {
        Number(x);
        potenciacion = x ^ 2;
        multi1 = potenciacion * 3;
        multi2 = x * 7;
        sum = multi1+ multi2
        resul = sum - 15;
        pantalla.value = resul;
    } else if (x == "") return alert('Ingrese un valor')
}
)