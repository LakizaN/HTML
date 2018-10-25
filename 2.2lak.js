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
$("p").src="чирва.png";
if($('sl21').selectedIndex==1)
$('p').src="трефа.png";
if($('sl21').selectedIndex==2)
$('p').src="пика.png";
if($('sl21').selectedIndex==3)
$('p').src="бубна.png";
}

function rr()
{
$ ('areal').value="ПРИВЕТ, МИР!!!";
}

