function kvad(a,b,c){
    
    
    var a = -5;
    var b = 5;
    var c = 30;
    var z1 = (-b-Math.sqrt((b*b)-(4*(a*c))))/(2*a);
    var z2 = (-b+Math.sqrt((b*b)-(4*(a*c))))/(2*a)
    return("x1: "+z1+", x2: "+z2);
    
}
function getz(){
    var num = String(prompt('Enter a formule like this example:\n ax^+-bx+-c=0'));
    var a1 = String(num.match(/[+-]?[0-9]+x\^/));
    var a = a1.match(/[+-]?[0-9]+/);
    var b1 = String(num.match(/[+-]?[0-9]+x[-+=]/));
    var b=b1.match(/[+-]?[0-9]+/);
    var c1=String(num.match(/[+-]?[0-9][^x]/));
    var c = c1.match(/[+-]?[0-9]+/);
    // -5x^+5x+30=0
    return(kvad(a,b,c));
}

function wr(){document.getElementById("p").innerHTML=("Result: "+getz());}