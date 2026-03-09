// Smooth scrolling for navigation links
document.querySelectorAll(".navLinks a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if(targetSection){
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Destination card click event
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        const place = card.innerText;

        alert("✈️ You selected: " + place + "\nMore travel details coming soon!");
    });
});


// Book Now button
const bookBtn = document.querySelector(".btn-secondary");

bookBtn.addEventListener("click", function(e){
    e.preventDefault();

    alert("📩 Thank you for choosing Travels!\nOur team will contact you soon.");
});


// Package card hover message
const packages = document.querySelectorAll(".package-card");

packages.forEach(pkg => {
    pkg.addEventListener("click", () => {

        alert("🎉 Package Selected: " + pkg.innerText);
    });
});


// Scroll animation effect
window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(cardTop < screenHeight - 50){
            card.style.transform = "scale(1)";
            card.style.opacity = "1";
        }
    });

});


const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function(){

    const value = searchBar.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "flex";
        }
        else{
            card.style.display = "none";
        }

    });

});


const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

const hero = document.getElementById("hero");

const images = [
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
"https://travelbabbo.com/wp-content/uploads/2020/05/20190604_0028_Stoen-126-3.jpg",
"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
];

let index = 0;

function changeHero(){

hero.style.backgroundImage = "url(" + images[index] + ")";

index++;

if(index === images.length){
index = 0;
}

}

setInterval(changeHero, 4000);

changeHero();