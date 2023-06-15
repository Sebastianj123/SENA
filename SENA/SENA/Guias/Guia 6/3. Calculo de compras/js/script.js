var enunciado = 'Digite el valor del producto ',
p1 = Number(prompt(enunciado + '"1"')),
p2 = Number(prompt(enunciado + '"2"')),
p3 = Number(prompt(enunciado + '"3"')),
p4 = Number(prompt(enunciado + '"4"')),
p5 = Number(prompt(enunciado + '"5"')),
operar = ((p1 + (p1 * 0.19)) + (p2 + (p2 * 0.19)) + (p3 + (p3 * 0.19)) + (p4 + (p4 * 0.19)) + (p5 + (p5 * 0.19))).toFixed(1);

alert('El total a pagar es de $' + operar)