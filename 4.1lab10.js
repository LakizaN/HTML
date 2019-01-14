function $()
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

function f(x) 
{var x=document.getElementById('In').value;
 var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 fff='';
   for (var i = 0; i < x.length; i++)
   {
      b=x.charAt(i);
   // alert(b);
    if(a.indexOf(b)<0)
     fff=fff+b.toUpperCase();
else
fff=fff+b.toLowerCase();
}
return fff;
 

}
  		
