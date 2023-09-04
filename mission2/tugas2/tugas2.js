const char = document.getElementById("supra")
const cactus = document.getElementById("cactus")




function jump(){
    if (char.classList != "animasi"){
        char.classList.add("animasi");
    }
    setTimeout(function(){
        char.classList.remove("animasi")
    },500)
    
}

const ifhit = setInterval(function(){
    const charTOP = parseInt(window.getComputedStyle(char).getPropertyValue("top"))
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

if (cactusLeft < 90 && cactusLeft > 0 && charTOP >= 60){
    cactus.style.animation = "none"
    cactus.style.display = "none"
    if(confirm("supra mu nabrak, ulangi?")){
        window.location.reload()
    }
}

})