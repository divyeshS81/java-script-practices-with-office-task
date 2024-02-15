
fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((data) => data.json())
      // .then((data) => console.log("data:", data));
      .then((data)=>{
            console.log(data.results[0].name);
            fetch(data.results[0].url)
            .then((data)=> data.json())
            .then((data) =>console.log(data))
      });