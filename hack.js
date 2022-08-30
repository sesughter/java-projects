let color = ["blue", "green", "yellow", "purple", "red"]
let defaultColor = "white"
let defaultBtn = document.getElementById("default")
let colorbtn = document.getElementById("color-button")
let count = 0
colorbtn.addEventListener("click", function(){
   
    if(count < color.length - 1){
        count += 1
    }else{
        count = 0
    }
    document.body.style.backgroundColor = color[count]
    colorbtn.textContent = color[count]
    console.log(count)
       
})
defaultBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = defaultColor
})