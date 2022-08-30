let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let defaultColor = "white"
let defaultBtn = document.getElementById("default")
let colorbtn = document.getElementById("color-button")

colorbtn.addEventListener("click", function(){
     randomColor()
   let hexcolor = "#"
   for(let i=0;i<6;i++){
    hexcolor += color[randomColor()]
    
   }
   document.body.style.backgroundColor = hexcolor
   console.log(hexcolor)
   colorbtn.textContent = hexcolor
})

function randomColor(){
    return Math.floor(Math.random()*16)
}
defaultBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = defaultColor
})