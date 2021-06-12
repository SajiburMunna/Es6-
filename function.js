// function add (num1,num2){
//     return num1+num2;
// }
// x=add(100,100)
// console.log(x);

// const add1=(n1,n2)=>n1+n2 ;
// console.log(add1(10,10));
//  var javascript={
//      name:"javascript",
//      libraries:["React","Angular","Vue"],
//      printlibraries:function(){
//          this.libraries.forEach((a)=>console.log(`${this.name}loves ${a}`));

//      },
//  };
//  javascript.printlibraries();

// const Name = ['sojib','munna','mahin'];
  
// Name.forEach(names=>{
// console.log(names);
// });
// const companies = ["Apple", "Google", "Facebook"];

// function printValue(company, inx) {
// 	console.log(inx,company);
// };

// companies.forEach(printValue);


 ///truthy/falsy
//false,0,null,undefined,NaN
// var number="sojib";
// if (!number){
//     console.log("is true");
// }else{
//     console.log("is false");
// }

//ternary Oprtator

// var age =12;
// if (age >18){
//     type='adult';
//     //console.log("adult");

// }else{
    
    
//     //console.log("child")
//     type='child';
// }
// console.log(type);

// var t=age>=18 ? "adult": age<10 ? "child":"Young";
// console.log(t);

// var n=6;
// var f=n>6 ;
// console.log(f);

//arrayfind()

// var numbers=[1,2,3,4,5,6,7];

// var r=numbers.find((currentValue)=>{
//     return currentValue<3;
// });

// var r1=numbers.findIndex((currentValue)=>{
//     return currentValue>6;
// });

// console.log(numbers);
// console.log(r);
// console.log(r1);

///silce
// var numbers=[1,2,3,4];
// var r=numbers.slice(1,3);
// console.log(r);

///filter method
// var n =[1,2,3,4,5,6,7];
// var m=n.filter((c,index,arr)=>{
//     console.log(arr);
//     console.log(index);
//     return (c<5);
    
// });
// console.log(m);


// ///spilce
// var numbers=[1,2,3,4];
// var r=numbers.splice(0,2);
// console.log(r);

///concat

// var a=[1,2,3,4];
// var b=[5,5,6,7];
// var r=a.concat(b);
// console.log(r);

// //map

//  var a=[1,2,3,4,5];
//  var b=[6,7,8];
//  var c=[9,10,11];
//  var e=[1];
 

//   var d=[...a,...b,...c];
// // var a=[1,2,3,4];
// // a.push(5);
// var c=d.map((b)=>{
//     return b;

    
// });
// console.log(c);
// console.log(a);

///reduce

// var a=[1,2,3,4];
// var c=a.reduce((b,d)=>{
//     return b+d;
// },0);
// console.log(c);

///for of and for in 

// var n={
//     name:'sojib',
//     age:'12',
//     id:'1'
// }

// for(prp in n){
//     console.log(prp);
// }

// var a=[1,2,3,4,5];
// for (p of a)
//     console.log(p);
// }
 
// const a="iloveyou";
// for (p of a){
//     console.log( p);
// }
 
///object importance
// var obj={
//     name:'sojib',
//     age:'12',
//     id:'1'
// }
// var k=Object.keys(obj);
// var l=Object.values(obj);
// var m=Object.entries(obj);


// console.log(k);
// console.log(l);
// console.log(m);

//default
//  function a(c){
//      return c;
//  }
//  console.log(a());

//  spread
 var a=[1,2,3,4,5];
 var b=[6,7,8];
 var c=[9,10,11];
 var e=[1];
 

  var d=[...a,b];
  console.log(d);
// var d=[...e,a];
 // a.push(6);
// console.log(a);
// console.log(d);

// var a={
//     name:'munna',
//     age:'12'
// }

// var b={
//     name:'sojib',
//     age:'13'
// }
// var c={...b,...a};
// console.log(c);


//rest operator

// function m(a,b){
//     console.log(a,b);
// }
// m(1,2);

// function n(...params){
//     console.log(params);
// }
// n(3,4,5,6);

//  if (true){
//      var n="i am sojib";
//  }
//  if (true){
//      let m="i am munna";
//      console.log(m); 
//  }

//  if (true){
  
//   let  m="i am sojib";
//   m="i am munna";
//     console.log(m); 
// }



//random color
// const v =Math.random()
//     .toString(12).substr(+6);
   
//     console.log (v);



 
 
 
 
// var a=[1,2,3,4];

// var b= a.filter((c)=>{
//   return c >1;

// });
// console.log(b);
