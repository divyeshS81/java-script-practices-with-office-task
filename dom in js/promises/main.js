/* let promise = new Promise(function (resolve, reject) {
      const x = "geeksforgeeks";
      const y = "geeksforgeeks"
      if (x === y) {
            resolve();
      } else {
            reject();
      }
});

promise.
      then(function () {
            console.log('Success, You are a GEEK');
      }).
      catch(function () {
            console.log('Some error has occurred');
      }); */



/*let countValue = new Promise(function (resolve, reject) {
      resolve("Promise resolved");
    });
    
    // executes when promise is resolved successfully
    
    countValue
      .then(function successValue(result) {
        console.log(result);
      })
    
      .then(function successValue1() {
        console.log("You can call multiple functions this way.");
      }); */






// returns a promise
/*let countValue = new Promise(function (resolve, reject) {
      reject('Promise rejected');
});

// executes when promise is resolved successfully
countValue.then(
      function successValue(result) {
            console.log(result);
      },
)

      // executes if there is an error
      .catch(
            function errorValue(result) {
                  console.log(result);
            }
      );*/


/*var p = new Promise(function (resolve, reject) {
      var x = 2 + 3;
      if (x == 5) 
            resolve(" executed and resolved successfully");
      else
            reject("rejected");
});
p.then(function (fromResolve) {
      document.write("Promise is" + fromResolve);
}).catch(function (fromReject) {
      document.write("Promise is " + fromReject);
});  */



/* function sumAsync (x,y){
      console.log("1.sumAsync is executed");
      const p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  console.log("4. Resolving sumAsync's Promise with the result after 500ms");
                  resolve(x + y);
            },10000);
            console.log("2. sumAsync Promise is initialized");
      });
      console.log("3. sumAsync has returned the promise");
      return p;
}

sumAsync(5, 7).then((result)=>{
      console.log("5. the result of the addition is:",result);
}); */