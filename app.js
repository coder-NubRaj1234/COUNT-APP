//set initial value...............
let count = 0;

//select value and buttons ,,,,,,,,,,
let value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click" , function(e){
        let style = e.target.classList;
        if(style.contains("decrease")){
            count--;
          
        }else if(style.contains("increase")){
            count++;
        }else if(style.contains("reset")){
            count = 0;
        }

        if(count === 0 ){
            value.style.color = "black";
        }else if(count < 0){
            value.style.color = "red";
        }else if(count > 0){
            value.style.color = "green";
        }

        value.textContent = count;
    });
});