let horas =  document.getElementById("hora");
let minutos =  document.getElementById("minuto");
let segundos =  document.getElementById("segundo");
setTimeout(setDate, 1000);

function setDate(){
    const date =  new Date();
    horas.innerHTML=date.getHours();
    minutos.innerHTML=date.getMinutes();
    segundos.innerHTML=date.getSeconds(); 
    setTimeout(setDate, 1000);
}