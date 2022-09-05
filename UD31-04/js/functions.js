var input;
console.log(input);
var n1,n2, res=0;
var op;
var pos = true;
function retr() {
    input = document.getElementById("text").value;
    input=input.slice(0,-1);
    if (input=="") {
        document.getElementById("text").value="0";
    }else{
        document.getElementById("text").value=input;
    }
}

function ce() {
    input = document.getElementById("text").value;
    document.getElementById("text").value="0";
}

function c() {
    input = document.getElementById("text").value;
    n1=null;
    document.getElementById("text").value="0";
}

function n(num) {
    input = document.getElementById("text").value;
    if (input=="0" && num!=',') {
        input=num;
    }else{
        input=input+num;
    }
    document.getElementById("text").value=input;
}

function coma() {
    input = document.getElementById("text").value;
    input=input+",";
    document.getElementById("text").value=input;
}

function sum() {
    input = document.getElementById("text").value;
    n1=parseFloat(input);
    document.getElementById("text").value="0";
    op="+";
}

function opS(operador) {
    input = document.getElementById("text").value;
    n1=parseFloat(input);
    document.getElementById("text").value="0";
    op=operador;
}

function posNeg() {
    input = document.getElementById("text").value;
    if (pos) {
        document.getElementById("text").value="-"+input;
        pos=false;
    }else{
        document.getElementById("text").value=input.substring(1);
        pos=true;
    }
}

function dividir1() {
    input = document.getElementById("text").value;
    res = 1/parseFloat(input);
    document.getElementById("text").value=res;
}

function raiz() {
    input = document.getElementById("text").value;
    res = Math.sqrt(parseFloat(input));
    document.getElementById("text").value=res;
}

function igual() {
    switch (op) {
        case "+":
            n2=parseFloat(input);
            res=n1+n2
            break;
        case "-":
            n2=parseFloat(input);
            res=n1-n2
            break;
        case "*":
            n2=parseFloat(input);
            res=n1*n2
            break;
        case "/":
            n2=parseFloat(input);
            res=n1/n2
        break;
        case "%":
            n2=parseFloat(input);
            res=n1%n2
        break;

        default:
            break;
    }
    document.getElementById("text").value=res;
}
