const ParentDiv = document.getElementById("parent");
const firstname = document.getElementById("firstNameBtn");
const lastname = document.getElementById("lastNameBtn");
const childDiv = document.getElementById("child");


firstname.addEventListener("click",(event)=>{
    childDiv.textContent = "sarvaiya";
    console.log("click on first name btn");
    event.stopPropagation();
});


lastname.addEventListener("click",(event)=>{
    childDiv.textContent ="divyesh";
    console.log("click on last name btn");
    event.stopPropagation();
});

// const ParentDiv = document.querySelector(".parent");
ParentDiv.addEventListener("click",(event)=>{
    // const firstname1 = "divyesh";
    // const lastname1 = "sarvaiya";
    childDiv.textContent = 'sarvaiya divyesh';
    console.log("click on parent div");
    event.stopPropagation();
});