//So welcome back ,
//today we gonna discuss about VARIABLES , 
//what are variables ?
//why do we use them
//and how to mark anything in js as variables
//LETS get started

/*
Q): So what is a variable?
ANS): Just like in any other languages , here also it is the same concept
      varibale is just a container which holds some values ,
      these containers are also some kind of name given to those values 
      and this could be anyting but remember we can not start a varibale name with numbers,
      we can start the variable name using (A-Z)or (a-z) alphabets , (_)underscore and
      a special characteristic called $(dollar) but remember use of starting letter for varibale
      as _ and $ are not a good practice . 
*/

//Some ways to decaler and initialze the variables:-
let name ="Lakshya" // we use "let" keyword 
var n="lakshya"     // we use "var" keyword
Name="Lakshya1"      // we dont use any keyword
num=10              // we dont use any keyword
const h=10          // we use "const" key word

//all have different uses and meaning :-

/*
let:
"let" was introduced in newer versions of javascript , it works in scope {} and is secure

var:
"var" was used in older versions and its use now is discouraged as its not secure and 
runs out of scope {}

without any keywor:
so we can declare any varibale without any kwyword , its use is also not encouraged ,
as it may create confusion in dev world

const:
"const" is a keyword that is used for that variables whose values must not be changed ,
like the orderID, studentID , and so on 
*/

console.table([Name, n, name, num, h  ])

// see above , we used a different function now .table([])
/*
cause we got a differen output now 
see:
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ Lakshya1  │  
│    1    │ lakshya   │
│    2    │ Lakshya   │
│    3    │    10     │
│    4    │    10     │
└─────────┴───────────┘
this was the output in console , as a table

also see here name and Name , are same words with different case , so they both were treated 
as different varibales 

*/

//so I think we are done for today again ,let's meet again !!
//BYE!!                                  BYE!!
