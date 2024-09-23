// Parallax Effect
let listBg = document.querySelectorAll(".bg");
let titleBanner = document.querySelector(".motto");

window.addEventListener("scroll", (event) => {
    let top = this.scrollY;
    // Index is the order of class (bg 0,1,2...8). When scrolling, the class bg scrolls down.
    // The bigger the index, the faster the movement
    listBg.forEach((bg, index) => {
        if (index !=0 && index != 10){
            bg.style.transform = `translateY(${top*index/2}px)`;
        } else if (index ==1) {
            bg.style.transform = `translateY(${top/3}px)`;
        }
    })
    titleBanner.style.transform = `translateY(${top*3/2}px)`;
});