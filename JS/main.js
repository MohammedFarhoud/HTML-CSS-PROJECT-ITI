var imageArray = ["/Images/1.webp", "/Images/2.webp", "/Images/3.webp", "/Images/4.webp", "/Images/5.jpg", "/Images/6.webp"];
var i = 0;

function startSlider(){
    t = setInterval(nextImage,2000);
}

function stopSlider(){
    clearInterval(t)
}

startSlider()

function nextImage(){
    stopSlider()
    i++;
    if (i > imageArray.length-1)
    {
        i = 0;
    }
    sliderImg.src = imageArray[i];
    startSlider()
}

function prevImage(){
    stopSlider()
    i--;
    if (i < 0)
    {
        i = imageArray.length-1;
    }
    sliderImg.src = imageArray[i];
    startSlider()
}

const toggleBtn = document.getElementById("btn-i");
const navBarToggle = document.getElementsByClassName("navBar")[0];
function toggleHandler() {
    navBarToggle.classList.toggle("active");
    toggleBtn.classList.value = toggleBtn.classList.value === "fa fa-bars btn" 
                                 ? "fa-solid fa-xmark"
                                 : "fa fa-bars btn"
}
toggleBtn.addEventListener("click", toggleHandler);