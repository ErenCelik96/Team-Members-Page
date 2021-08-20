let checkbox = document.querySelector('input[type="checkbox"]');
let body = document.getElementsByTagName("body")[0];

checkbox.addEventListener("click", function(){
    if (checkbox.checked) {
        body.style.backgroundColor="black";
        body.style.color="white";
    } else {
        body.style.backgroundColor="white";
        body.style.color="black";
    }
});