// const boxes = document.querySelectorAll('.box');
// const emptyBox = document.getElementById('emptyBox');

// boxes.forEach(box => {
//     box.addEventListener('click',function(){
//         const color = box.style.background;
//         emptyBox.style.background = color;
//     });
// });


// document.addEventListener('DOMContentLoaded',() => {
//     const boxes = document.querySelectorAll('.box');
//     const emptyBoxs = document.getElementById('emptyBox');
//     const resetButtons = document.getElementById('resetButton');
  
//     boxes.forEach((box, index) => {
//       box.addEventListener('click', function() {
//         emptyBoxs.style.background = box.style.background;
//       });
//     });
  
//     resetButtons.addEventListener('click', function() {
//       emptyBox.style.background = '';
//     });
//   });


const boxes =document.querySelectorAll('.box');
const emptyboxs = document.getElementById('emptyBox');
const resetButtons = document.getElementById('resetButton');

boxes.forEach((box, abc)=>{
  box.addEventListener('click',function(){
    emptyboxs.style.background = box.style.background;
  });
});

resetButtons.addEventListener('click', function() {
        emptyBox.style.background = '';
     });


     

   