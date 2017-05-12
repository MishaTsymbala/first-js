 var a = Number(prompt('Enter A')); 
 var b = Number(prompt('Enter B')); 
 var c = Number(prompt('Enter С')); 
 var result = squareEq(a, b, c); 
 document.write(result); 
 function squareEq(a, b, c) { 
 var d = Number(b*b - 4*a*c); 
 if (d < 0) { 
 return "D is less than 0!"; 
 } 
 else if (d > 0) { 
 var x1 = ((-1)*b - Math.sqrt(d))/(2*a); 
 var x2 = ((-1)*b + Math.sqrt(d))/(2*a); 
 return "" + "x1: " + x1 + ", " + "x2: " + x2; 
 } 
 else if (d == 0) { 
 return ((-1)*b)/(2*a); 
 } 
 } 