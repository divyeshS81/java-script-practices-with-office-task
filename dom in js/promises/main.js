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