const images = ["img/pool.svg","img/map.svg","img/dialog.svg"];

images.forEach(el=>{
    const img = document.createElement("div");
    img.className = "mini__item";
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener("click", e=>
        showPopup(`<img alt='pic' src="${el}">`)
    )
    document.body.append(img);
})

const popup = document.querySelector(".popup");
const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;
const closePopup = function(e){
    e.target.parentElement.classList.remove("popup_active");
}
const showPopup =  function(text){
    popup.classList.add("popup_active");
    popupContent.innerHTML = text;
};
popupClose.addEventListener("click", closePopup);
const body = document.querySelector("body");

document.onclick = () => {
    let divs = document.querySelectorAll("div");
    let numb = 0;
    divs.forEach(function(e) {
        if (e.contains(event.target)){numb+=1
        };
    });  if (numb==0) {popup.classList.remove("popup_active")}
};
