document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("Bookstore JS imported successfully!");
  },
  false
);
 const signupForm = document.getElementById("signupbtn")

function showRegisterForm(){
  signupForm.style.display= "block"
}


 signupForm.addEventListener("click", ()=>{
console.log("click");
showRegisterForm()
})
