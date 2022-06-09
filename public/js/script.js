const { Mongoose } = require("mongoose");

document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("Bookstore JS imported successfully!");
  },
  false
);
Mongoose.find('')

let addItemId = 0;
 function addToCart(){
  addItemId += 1;
   let selectedElem = document.createElement('div');
   selectedElem.classList.add('cartImg');
   selectedElem.setAttribute('id', oneBook.id);
   let img = document.createElement('img');
   img.setAttribute('src', oneBook.img)
   console.log('HIIIIEER',oneBook.img)
   let title = document.createElement('div');
   title.innerText = oneBook.innerText;
   let delBtn = document.createElement('button');
   delBtn.innerText = 'Delete';
   delBtn.setAttribute('onclick', 'del('+addItemId+')');
   let cartItem = document.getElementById('title-C')
   selectedElem.append(img);
   selectedElem.append(title);
   selectedElem.append(delBtn);
   cartItem.append(selectedElem);
 }

 function del(){
   document.getElementById(oneBook).remove();
 }