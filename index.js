const mainContainer = document.querySelector("#mainContainer");
const thankContainer = document.querySelector(".thankYouContainer"); 
const submit = document.getElementById("submit-rating"); 
const rates = document.querySelectorAll(".btn"); 
const rating = document.querySelector(".ratingSpan"); 
const rateAgain = document.getElementById("rate-again");

submit.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thankContainer.classList.remove("hide");

  rates.forEach((rate) => {
    rate.addEventListener("click",() =>{
        rating.innerHTML = rate.innerHTML
        rating.style.color = "orange"
    })
  });
  rateAgain.addEventListener("click",()=>{
   mainContainer.style.display = ""
   thankContainer.classList.add("hide")
  })
});
