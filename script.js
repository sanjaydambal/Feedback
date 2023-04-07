const ratingEls = document.querySelectorAll(".ratings");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedBtn = "";
ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
             removeActive()
             selectedBtn = event.target.innerText || event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.classList.parentNode.add("active")
    });
});

btnEl.addEventListener("click",() => {
    if(selectedBtn !== ""){
containerEl.innerHTML = `
<strong> Thank You </strong>
<br>
<br>
<strong> Feedback : ${selectedBtn} </strong>
<p>We'll use your feedback to improve our customer support.</p>
`;
    }
})
function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active")
    })
}
