/*--> use of "new" keyword in array and object
--> ...(rest and spread operator)
--> object
--> assign(), structrClone()
--> store function in array and object*/








// use of "new" keywors in object


// function abc (name,age){
//     this.name = name;
//     this.age = age;
// }
// const abc1 = new abc  ("abcd",25);
// const BCDE = new abc ("gdgsh",85)
// console.log(abc1,BCDE);

// the new keyword use in object as a constructor functions

  // use of "new" keyword in array

//   const array1 = [1,2,3,4,5,6];
//   const array2 = new Array (4,56,76);
//   const array3 = new Array (854,852,8826,2616);
//   console.log(array2,array3);



// spread operator

// const obj={
//     name:"abc",
//     age:50,
//     obj1:{
//         name:"xyz",
//         age:25,
//     }
// }

// const obj2 ={...obj};
// obj2.name = "divyesh";

// console.log(obj2);


// rest operator
// function sum(...args){

//     let totle = 0;
//     for (const arg of args ){
//         totle += arg;
//     }
//     return totle;
// }

// console.log(sum(2,5,8,10));



// assign()

// const abc={x:1 , y:2};
// const pqr={i:5 , j:6};

// const value = Object.assign(abc,pqr);
// console.log(abc);

// console.log(value === abc);

// it copies one or more source Object to a target Object



// structuredClone() is a goble function

// const xyz ={
//   name:["abc","pqr"],
// };

// const xyz1 = structuredClone(xyz);

// xyz1.name.push("divyesh");
// xyz.name.pop();


// console.log(xyz1.name);
// console.log(xyz.name);





// store a function in the array and object














// function abc (name){
//     console.log('hello,name');
// }
// const functionarray = [ abc ];

// functionarray[0]('xyz');
// console.log(functionarray);




// store a function in the object

function square(x){
    return x * x;
}
const funcationObject ={
    squareFunction: square
};
const result = funcationObject.squareFunction(5);
console.log(result);