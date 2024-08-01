function showSlideright() {
    var slid = document.querySelector("#slideright");
    slid.style.display = "flex";
}

const cross = document.querySelector("#cross")

var height = document.querySelector("#slideright")


cross.addEventListener("click", function(){
    height.style.display = "none";
})

