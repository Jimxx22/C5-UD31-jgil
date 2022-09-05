//random 1-6
//sumar el res de 2 dados
//anotar en array la operacion qeu da como resultado el mismo resultado repitiendo el random 36000 veces

let sumas=[];
let n1 = Math.floor(Math.random() * 6) + 1;
let n2 = Math.floor(Math.random() * 6) + 1;
let res = n1+n2;

for (let index = 0; index < 36000; index++) {
    n1 = Math.floor(Math.random() * 6) + 1;
    n2 = Math.floor(Math.random() * 6) + 1;
    compSuma(n1,n2);
}
document.write("El resultado "+res+ " ha salido: "+sumas.length);

function compSuma(a, b) {
    if (a+b==res) {
        sumas.push(a+"+"+b);
    }
}