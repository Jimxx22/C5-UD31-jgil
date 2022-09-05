
//Punto 1
let txt1 = prompt("Entra una fecha: ");
let fecha = txt1.split("/");
console.log(fecha);

if (fecha[0]<32 && fecha[0]>0) {
    if (fecha[1]<13 && fecha[1]>0) {
        if (fecha[2]<2023 && fecha[2]>0) {
            alert("La fecha es correcta")
        }    
    }
}  

//Punto 2
let txt2 = prompt("Entra una mail: ");
const pattern1= /[-\.a-zA-Z0-9]+/g;
const pattern2= /[a-zA-Z0-9]+\.([a-zAz]{1,3})/g;
let mail = txt2.split("@");
console.log(mail);
 
if (pattern1.test(mail[0])) {
    if (pattern2.test(mail[1])) {
        alert("El mail es correcto")
    }
}   

//Punto 3
let txt3 = prompt("Comprovar texto: ");
const pattern3= /&[a-zA-Z]+;/g;
console.log(txt3);

if (pattern3.test(txt3)) {
    alert("Error no puedes introducir estos carcacteres")
}else{
    alert("Todo correcto")
}   

//Punto 4
let txt4 = prompt("Entra una nombre con apellido: ");
let nombre = txt4.split(" ");
console.log(nombre);
alert(nombre[1]+", "+nombre[0]);
  
//Punto 5
let txt5 = prompt("Comprovar texto: ");
let com=true;
console.log(txt5);
const pattern4= /<script>/;
const pattern5= /<\/script>/;
const pattern6= /<script>.+<\/script>/;
var okStr = txt5.replace(pattern6, " ");
okStr = okStr.replace(pattern4,"");
okStr = okStr.replace(pattern5,"");
alert("El texto introducido es: \n" +okStr);