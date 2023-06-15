const divAcumulado = document.getElementById('acumulado'),
divNumeros = document.getElementById('numeros'),
divOperador = document.querySelector('operador'),
expresionOperadores = /\+|-|\*|\//gi,
expresionNumeros = /\d/;

var numeros = '',
operadores = null,
acumulador = [],
valores = "";
resultado = null;

function calculate(array) {
     resultado = array.reduce((a, b) => {
      switch (b) {
        case "+":
          return a + Number(b);
        case "-":
          return a - Number(b);
        case "*":
          return a * Number(b);
        case "/":
          return a / Number(b);
        default:
          return Number(b);
      }
    }, 0);
  
    return resultado;
  }

window.addEventListener('click',function(dates) {

    
    let filtro = dates.target.attributes.value.nodeValue,
    operador = expresionOperadores.test(filtro);
    // console.log(filtro);
    // console.log(operador + " operador");
    // console.log(expresionNumeros.test(filtro) + " numeros");
    


    switch (filtro) {

        case 'CE':
            
            location.reload();
            break;
    
        case 'value':

            if (numeros == null | numeros == '') {
                return this.alert('Ingrese un valor')
            }
            
            else {
                return numeros = numeros.substring(0, numeros.length -1), 
                divNumeros.innerHTML = numeros;
            }

        case '=':
            
            if (numeros == null | numeros == '') {
            
                return this.alert('Ingrese un valor')
            
            } else {
                
                acumulador.push(numeros);
                valores = "";
                acumulador.forEach(function(valor){
                    valores += valor + " ";
                    divAcumulado.innerHTML = valores;
                });

                
                // calculate(acumulador);

                // acumulador.forEach(function(valorRes){
                //     console.log(valorRes);
                //     resultado += parseInt(valorRes);
                //     console.log(re);
                // })

                // divNumeros.innerHTML = resultado;
                divNumeros.innerHTML = resultado;

            }      
                break;

        default :
        
        if (operador) {

            if(acumulador == null) {
                
                operadores = filtro.match(expresionOperadores);
                acumulador.push(numeros,operadores);
                numeros = '';
                divNumeros.innerHTML = operadores;
                acumulador.forEach(function(valor){
                    // divAcumulado.innerHTML = '';
                    divAcumulado.innerHTML += valor; 
                });

            } else {

                operadores = null;
                operadores = filtro.match(expresionOperadores);
                acumulador.push(numeros,operadores);
                numeros = '';
                divAcumulado.innerHTML = '';
                acumulador.forEach(function(valor){
                    valores += valor + " ";
                    divAcumulado.innerHTML = valores;
                });
                divNumeros.innerHTML = operadores;

            }

        } else {

            numeros = numeros + filtro;
            divNumeros.innerHTML = numeros;

        }
    }
})











// por si acaso 

// const divAcumulado = document.getElementById('acumulado'),
// divNumeros = document.getElementById('numeros'),
// divOperador = document.querySelector('operador'),
// expresionOperadores = /\+|-|\*|\//gi,
// expresionNumeros = /\d/;

// var numeros = '',
// operadores = null,
// acumulador = null,
// resultado = null;


// window.addEventListener('click',function(dates) {

    
//     let filtro = dates.target.attributes.value.nodeValue,
//     operador = expresionOperadores.test(filtro);
//     // console.log(filtro);
//     // console.log(operador + " operador");
//     // console.log(expresionNumeros.test(filtro) + " numeros");
    


//     switch (filtro) {

//         case 'CE':
            
//             location.reload();
//             break;
    
//         case 'value':

//             if (numeros == null | numeros == '') {
//                 return this.alert('Ingrese un valor')
//             }
            
//             else {
//                 return numeros = numeros.substring(0, numeros.length -1), 
//                 divNumeros.innerHTML = numeros;
//             }

//         case '=':
            
//             if (numeros == null | numeros == '') {
            
//                 return this.alert('Ingrese un valor')
            
//             } else {
                
//                 acumulador = `${acumulador} ${numeros}`
                
//                 resultado = parseInt(acumulador);
//                 break;
//                 divNumeros.innerHTML = resultado;
            
//             }

//             break;

//         default :
        
//         if (operador) {

//             if(acumulador == null) {
                
//                 operadores = filtro.match(expresionOperadores);
//                 acumulador = numeros + " " + operadores;
//                 numeros = '';
//                 divNumeros.innerHTML = operadores;
//                 divAcumulado.innerHTML = acumulador;

//             } else {

//                 operadores = null;
//                 operadores = filtro.match(expresionOperadores);
//                 acumulador = `${acumulador} ${numeros} ${operadores}`;
//                 numeros = '';
//                 divAcumulado.innerHTML = acumulador;
//                 divNumeros.innerHTML = operadores;

//             }

//         } else {

//             numeros = numeros + filtro;
//             divNumeros.innerHTML = numeros;

//         }
//     }
// })