let i = 0;
let zdjecia = [];
let time = 5000;

zdjecia[0] = 'Abstract.jpg'
zdjecia[1] = 'Museum.jpg'
zdjecia[2] = 'StreetArt.jpg';

function zmianaZdj(){
    document.slide.src = zdjecia[i];

    if(i < zdjecia.length - 1){
        i++;
    } 
    else{
        i = 0
    }
    setTimeout("zmianaZdj()", time)
}
zmianaZdj();

const linki = document.querySelectorAll(".menu_link");
linki.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({behavior:"smooth", block:"start"})
    })
})
