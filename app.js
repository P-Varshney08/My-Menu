// // Get all buttons
// const buttons = document.querySelectorAll('.btns button');

// // Get all items
// const items = document.querySelectorAll('.items > div');

// // Add click event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const category = button.getAttribute('data-category');

//     for(var j=0; j<items.length; j++){
//         items[j].style.display="none";
//     }
//     if(category==="all"){
//         for(var k=0; k<items.length; k++){
//             items[k].style.display="flex";
//         }
//     }
//     else {
//       const filteredItems = document.querySelectorAll(`.${category}`);
//       filteredItems.forEach(item => {
//         item.style.display = 'flex';
//       });
//     }
//   });
// });


const buttons = document.querySelectorAll(".btns button");
const items = document.querySelectorAll(".items > div");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const category = this.getAttribute('data-category');
    // alert(category);
	for(let j=0; j< items.length; j++){
		items[j].style.display="none";
	}

    if (category === "all") {
		for (let k = 0; k < items.length; k++) {
			items[k].style.display = "flex";
		}
    } 
	else {
      for (let k = 0; k < items.length; k++) {
        if (items[k].classList.contains(category)) {
          items[k].style.display = "flex";
        }
      }
	}
  });
}
