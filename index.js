// var hello = "hello wworld";
// document.write(hello);
// console.log(hello);
// alert(hello);

// var nan =10;
// var str = '10';
// var result = nan+Number(str);
// document.write(result);

function sum (a,b){
    var result = a+b;
    return result;
}

var var1 = 100,
var2 =200;
var result1 = sum(2,3);
var result2 = sum(var1,var2);

// document.write(result1);
// document.write("<br>");
// document.write(result2);

function print (vr){
    document.write(vr);
    document.write("<br>");
}
print (result1);
print(result2);

function lg(a,b){
    if (a>=b){
        return a;
    } else return b;
}

print (lg(10,20));

print(Math.sqrt(256));

var num = p