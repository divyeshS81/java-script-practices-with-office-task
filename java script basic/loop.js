

// for loop print hello 10 times
// for(i=0;i<10;i++)
// {
//     console.log("hello")
// }




//  while loop print hello 10 time
// i=0;
// while (i<10)
// {
//     console.log("hello");
//     i++
// }




// do while loop print hello 10 times
// i=0;
// do{
//     console.log("hello")
//     i++;
// }while(i<10)



// table of any number with for loop
// let i=1;
// for(i=1; i<=10; i++){
//    var z= 20 * i;
//    console.log(""+z)
// }




// table of any number with for loop
// let n =5 ;
// for (let i = 1; i <= 10; ++i){
// 	console.log( n * i);}



// table of any number with while loop

// let n=10;
// i=1;
// while(i<=10)
// {
// 	console.log(n * i);
// 	++i
// }




// table of any number with do while loop

// let n=10;
// i=1;
// do{
// 	console.log(n*i)
// 	i++;
// }while(i<=10)








// const obj = { a: 1, b: 2, c: 3 };
// for (const name in obj) {
//   console.log(name); // Outputs: a, b, c
//   console.log(obj[name]); // Outputs: 1, 2, 3
// }



// const arr = [1, 2, 3];
// for (const value of arr) {
//   console.log(value); // Outputs: 1, 2, 3
// }



// const car = {company:'toyota', modelname :'camry' , year: '2020'};
// for(const nm in car){
	
// 	console.log(nm+':'+car[nm]);
// }



// const person={firstname:'abc',secname:'xyz',bornyear:'2222'}
// for(const key in person){
// 	console.log(key + ':' + person[key])
// }



// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }








//  let n = 5;
//  let string = "";
//  for (let i = 0; i < n; i++) {

//    for (let k = 0; k < n - i; k++) {
//      string += "*";
//  }
//   string += "\n";
//  }
//  console.log(string);


//  let n=5;
//  let string = "";
//   for ( let i=0; i<n; i++){
//      for(let j=0; j<n-i; j++){
//         string += " * ";
//      }
//      string += "\n";
//  }
//  console.log(string);

// downward right tringal

// function customPattern(rows) {
//    for (let i = 0; i < rows; i++) {
      
//        for (let j = 0; j < i; j++) {
//            process.stdout.write(" ");
//        }

      
//        for (let k = 0; k < rows - i; k++) {
//            process.stdout.write("*");
//        }

   
//        console.log();
//    }
// }



// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {

//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let string ="";

// for(let i=5; i>=1;i--){
//     for (let j=1; j<=i; j++){
//         string +="*";
//     }
//     string +="\n";
// }
// console.log(string);


