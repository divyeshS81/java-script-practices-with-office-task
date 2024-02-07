


//forEach method of array using index, callback function, array as arguments



    // callback function in foreach


//     let arr=[1,2,3,4,5,6];

// arr.forEach((item,index,array)=>array[array] *= 2);
// console.log(arr);

// -------------------------------------------------------------------------

    //array using index

// let arr=[1,2,3,4,5];
// arr.forEach((index)=>{
//     console.log(index);
// })

// ----------------------------------------------------------------------------        

// use callback function in forEach to add 2 in the array and print the array

// let arr = [1,2,3,4,5,6];

// arr.forEach((item,index,array)=> array[array] += 2);
// console.log(arr);



// ------------------------------------------------------------------------------------------------------------------------------


//array.map()

// const arr = [1,2,3,4,5,6];
// const newarray = arr.map((num ,index)=> num * 2);
// console.log("array:",newarray);




// --------------------------------------------------------------------------------------------------------------------------

// filter()

// const arr = [1,2,3,4,5,6,7,8,9];

// const filterarray = arr.filter((num,index,array)=>{let ans = num + 5 === 7; return ans;});
// console.log( "Array Ans:",filterarray);

// const arr = ["abcd","a","csds","skjasc","daskjhc"];
// const abc = arr.filter((string,index,array)=>{let ans = string.length > 6; return ans;});
// console.log(abc);


// const arr = [1,2,3,4,5];
// const filterarray = arr.filter((num,index,array)=>{let ans = array + 2 === 5;return ans; });
// console.log("Array Index:",filterarray);
// --------------------------------------------------------------------------------------------------------------


// reduce()


// const arr = [1,2,3,4,5];
// instvalue = 2;
// const reduceArray = arr.reduce((previousValue,currentValue,) => {return previousValue + currentValue },instvalue);
// console.log(" ans:",reduceArray);


