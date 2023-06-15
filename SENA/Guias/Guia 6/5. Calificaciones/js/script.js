var P1 = Math.round(Number(prompt('Ingrese el valor de su 1 parcial (0-5)'))),
P2 = Math.round(Number(prompt('Ingrese el valor de su 2 parcial (0-5)'))),
P3 = Math.round(Number(prompt('Ingrese el valor de su 3 parcial (0-5)'))),
EF = Math.round(Number(prompt('Ingrese el valor de su examen final (0-5)'))),
TF = Math.round(Number(prompt('Ingrese el valor de su Trabajo Final (0-5)'))),
operacion = (((P1 + P2 + P3) * 0.55) + (0.30 * EF) + (0.15 * TF));

if (operacion >= 7.5) {
    alert('Paso la materia con: ' + operacion)
} else {
    alert('Perdio la materia con: ' + operacion)
}