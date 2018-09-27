﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }  


function f()
{
alert('Пауза');//Смотрим на первоначальные размеры блока mydiv
$('MyDiv1').style.height='95px'; 
$('MyDiv1').style.width='300px';
$('MyDiv1').style.borderColor='green';
$('MyDiv1').style.backgroundColor='yellow';
}


function f1()
{
alert('one');
$('MyDiv1').style.borderRightWidth='70px';
}

function f2()
{
alert('two');
$('MyDiv2').style.borderLeftColor='blue';

}function f3()
{
alert('three');
$('MyDiv3').style.marginBottom='20px' ;
}

function f4()
{
alert('four');
$('MyDiv4').style.paddingTop='10px' ;
}
function f5()
{
alert('five')
$('MyDiv5').style.backgroundColor='black';
}

function f6()
{
alert('six');
$('MyDiv6').style.paddingBottom='7%' ;
}
function f7()
{
alert('seven');
$('MyDiv7').style.borderColor='yellow'; borderStyle='solid';
}