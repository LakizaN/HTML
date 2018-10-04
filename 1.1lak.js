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


function f1()
{
if($('sl21').selectedIndex==0)
$("A1").style.backgroundColor="black";
if($('sl21').selectedIndex==1)
$("A1").style.backgroundColor="red";
if($('sl21').selectedIndex==2)
$("A1").style.backgroundColor="orange";
if($('sl21').selectedIndex==3)
$("A1").style.backgroundColor="yellow";
}
function P1()
{
$ ('areal').value="ПРИВЕТ, МИР!!!";
}



