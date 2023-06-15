const pantalla = document.getElementById('respuesta'),
asa = document.getElementById('boton')
var years = [];



asa.addEventListener('click',validar);

function validarDia() {
    if (years[0].day > years[1].day) {
        return diaM = years[0].day, diam = years[1].day;
    } 
    
    else {
        return diaM = years[1].day, diam = years[0].day;
    }
}

// Validacion del mes
function validarMes() {
    
    if (years[0].mount > years[1].mount) {
        return mesM = years[0].mount, mesm = years[1].mount;
    } 
    
    else {
        return mesM = years[1].mount, mesm = years[0].mount;
    }
}

// Validación del año
function validarYear() {
    if (years[0].year > years[1].year) {
        
        validarMes();
        validarDia();
        return yearsOperation(years[0].year, years[1].year, mesM, mesm, diaM, diam);    
        
    } 
    
    else {

        validarMes();
        validarDia();
        return yearsOperation(years[1].year, years[0].year, mesM, mesm, diaM, diam);
    }

}

// Función de operacion lógica
function yearsOperation (a,b,c,d,e,f) {
    years.push(
        operate = {
            diferenciaAños: a - b,
            mesesAños: (a - b) * 12,
            meses1: 12 - c,
            meses2: d,
            dias1: new Decimal(((30 - e) * 100 / 30) / 100).add((((f * 100) / 30) / 100)).toNumber(),
            dias2: (((f * 100) / 30) / 100),
            mesesTotal:  new Decimal(((30 - e) * 100 / 30) / 100).add((((f * 100) / 30) / 100)).sub(1).add(((a - b - 1 ) * 12)  + (d +(12 - c))).toNumber()
        }
    )
    
}


// Funcion para ingresar valores
function validar(){
    
    // Declaración de los valores aplicados a los input type="date"
    var ano1=document.getElementById('year1').value,
    ano2=document.getElementById('year2').value;
    
    // Limpiado o reseteo del array
    years = [];    

    // Ingreso de valores al array
    years.push(
        // Ingreso de los valores del primer input type="date"
        year1 = {
        year: Number(ano1.slice(0,4)),
        mount: Number(ano1.slice(5,7)),
        day: Number(ano1.slice(-2)) 
    }, 
        // Ingreso de los valores del segundo input type="date"
        year2 = {
        year: Number(ano2.slice(0,4)),
        mount: Number(ano2.slice(5,7)),
        day: Number(ano2.slice(-2)) 
    });

    // Condicional para ver si los input (in) poseen un valor
    if (ano1 == "" && ano2 == ""){return alert(`Ingrese un valor`);}
    
    // Si poseen el valor valida que dato es mayor
    else {
        // Aqui se valida el año
        validarYear();

    }

    console.log(years);
    if((years[2].mesesTotal).toFixed(1) == 0) {
        pantalla.value = (years[2].mesesTotal).toFixed(1);
    }
    else if ((years[2].mesesTotal).toFixed(1) < 0) {
        pantalla.value = -1 * ((years[2].mesesTotal).toFixed(1))
    } 
    else {
        pantalla.value = (years[2].mesesTotal).toFixed(1);
    }
}