// Your code here

const dodger = document.getElementById("dodger");

let left;
let bottom;
function moveDodgerLeft(){
        const leftNumbers = dodger.style.left.replace("px","");
         left = parseInt(leftNumbers, 10);
        if (left > 0){
            dodger.style.left = `${left - 1}px`;
        }

        console.log(left)
}
function moveDodgerRight(){
    
        const leftNumbers = dodger.style.left.replace("px","");
         left = parseInt(leftNumbers, 10);
        if(left < 360){
            dodger.style.left = `${left + 1}px`;
        }
        console.log(left)
    
}
function moveDodgerUp(){
        const bottomNumbers = dodger.style.bottom.replace("px","");
        bottom = parseInt(bottomNumbers, 10);
        if(bottom < 380){
            dodger.style.bottom = `${bottom + 1}px`;
        }
}
function moveDodgerBottom(){
        const bottomNumbers = dodger.style.bottom.replace("px","");
        bottom = parseInt(bottomNumbers, 10);
        if(bottom > 0){
            dodger.style.bottom = `${bottom - 1}px`;
        }
}

document.addEventListener('keydown', function(event){
    if(event.key === "ArrowLeft"){
        moveDodgerLeft();
    }else if (event.key === "ArrowRight"){
        
        moveDodgerRight();
    }else if(event.key === "ArrowUp"){
        moveDodgerUp()
    }else if(event.key === "ArrowDown"){
        moveDodgerBottom()
    }
    console.log(event.key)
})