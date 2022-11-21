
function one(params) {
    document.getElementById('input2').value += "1";    
}

function two(params) {
    document.getElementById('input2').value += "2";
}

function three(params) {
    document.getElementById('input2').value += "3";
}

function four(params) {
    document.getElementById('input2').value += "4";
}

function five(params) {
    document.getElementById('input2').value += "5";
}

function six(params) {
    document.getElementById('input2').value += "6";
}

function seven(params) {
    document.getElementById('input2').value += "7";
}

function eight(params) {
    document.getElementById('input2').value += "8";
}

function nine(params) {
    document.getElementById('input2').value += "9";
}

function zero(params) {
    document.getElementById('input2').value += "0";
}

function ca(params) {
        document.getElementById('input1').value = "";
        document.getElementById('input2').value = "";
}

function c(params) {
    document.getElementById('input2').value = "";
}

var firsN;
var secN;

var inp1_plus;
var inp1_minus;
var inp1_mult;
var inp1_divis;



function plus(params) {
        document.getElementById('input1').value = "+";
          firsN =  document.getElementById('input2').value;
        document.getElementById('input2').value = "";             
}

function minus(params) {
    document.getElementById('input1').value = "-";
        firsN =  document.getElementById('input2').value;   
    document.getElementById('input2').value = "";
          
}

function mult(params) {
    document.getElementById('input1').value = "×";
        firsN =  document.getElementById('input2').value;
    document.getElementById('input2').value = "";
           
}

function divis(params) {
    document.getElementById('input1').value = "÷";
        firsN =  document.getElementById('input2').value;
    document.getElementById('input2').value = "";
       
}


function result(params) {
   if (document.getElementById('input1').value == '+') {
       secN = document.getElementById('input2').value
    document.getElementById('input2').value = +firsN + +secN;
   }

    else if(document.getElementById('input1').value == '-') {
        secN = document.getElementById('input2').value
    document.getElementById('input2').value = +firsN - +secN;
    }

    else if(document.getElementById('input1').value == '×') {
        secN = document.getElementById('input2').value
    document.getElementById('input2').value = +firsN * +secN;
    }

    else if(document.getElementById('input1').value == '÷') {
        secN = document.getElementById('input2').value
    document.getElementById('input2').value = +firsN / +secN;
    }
}






