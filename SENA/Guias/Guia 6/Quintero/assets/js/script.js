const hora = document.getElementById("clock"),
fecha = document.getElementById('date'),
audio1 = new Audio('file:///C:/Users/sebas/OneDrive/Escritorio/SENA/QUINTERO/assets/mp3/agudo.mp3'),
audio2 = new Audio('file:///C:/Users/sebas/OneDrive/Escritorio/SENA/QUINTERO/assets/mp3/grave.mp3');

var reloj = [
    
    // Index = 0
    date = {
    y: 0000,
    m: 00,
    semana: 03,
    d: 27
    },

    // Index = 1
    hour = {
    h: 23,
    min: 59,
    seg: 57,
    seg1: true
    }
]



function imprimir() {

    hora.innerHTML = `${checkTime(reloj[1].h)}H : ${checkTime(reloj[1].min)}MIN : ${checkTime(reloj[1].seg)}S`;
    fecha.innerHTML = `${checkYear(reloj[0].y)}y : ${checkTime(reloj[0].m)}m : ${checkTime(reloj[0].semana)}s : ${checkTime(reloj[0].d)}d`;

    if (reloj[1].seg1 == 0) {
        
        audio1.autoplay = "true";
        reloj[1].seg1 = 1;

    } else {

        audio2.autoplay = "true";
        reloj[1].seg1 = 0;
    }
}

function startTime() {

    console.log(23);


    if (reloj[1].seg == 60) {

        reloj[1].min++
        reloj[1].seg = 0;

    }

    if (reloj[1].min == 60) {

        reloj[1].h++
        reloj[1].min = 0;

    } 

    if (reloj[1].h == 24) {

        reloj[0].d++
        reloj[1].h = 0;

    }
    
    if (reloj[0].d == 31) {

        reloj[0].m++
        reloj[0].semana= 0; 
        reloj[0].d = 0;
    }
    
    if ((reloj[0].d == 8 && reloj[0].semana == 0) | (reloj[0].d == 15 && reloj[0].semana == 1) | (reloj[0].d == 23 && reloj[0].semana == 2) | reloj[0].d == 28 && reloj[0].semana == 3) {

        debugger
        reloj[0].semana ++;

    }

    if (reloj[0].semana == 5) {

        

    }




    imprimir();

    reloj[1].seg++
    
    var time = setTimeout(function(){ startTime() }, 1000);

}



function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function checkYear(i) {
    if (i < 10) {
        i = "000" + i;
    }
    return i;
}

startTime();