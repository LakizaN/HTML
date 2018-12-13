
var t;
var b1=110;
var g1=100;
var r1=500;
function f()
{
var x1=document.getElementById('b11');
x1.style.top=(parseInt(x1.style.top)-80)+'px';
x1.style.left=(parseInt(x1.style.left))+'px';
b1-=150;
g1-=1000;
r1-=80;
str1='rgb('+b1+', '+g1+', '+r1+')';
x1.style.backgroundColor="white";
}
function k()
{t=setInterval('f()',100);}
function g()
{
clearInterval(t);
}
