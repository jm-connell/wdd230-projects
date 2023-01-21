const date = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(date);

document.querySelector("#headerDate").textContent = `${fulldateUK}`;

document.querySelector('#footerText').textContent = `© ${date.getFullYear()} Yakima Chamber | Jon Connell | WDD 230 Project | Last Modification: ${document.lastModified}`;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    document.querySelector("main").classList.toggle("mainMargin");
}

const largeQuery = window.matchMedia('(min-width: 70rem)')

if (largeQuery.matches) {
    document.querySelector("main").classList.toggle("mainMargin");
}

const day = date.getDay();

if (day == 1) {
    document.querySelector(".banner").style.display = "block";
    document.querySelector("body").style.marginTop = "3.8rem";
} else if (day == 2){
    document.querySelector(".banner").style.display = "block";
    document.querySelector("body").style.marginTop = "3.8rem";
    document.querySelector(".menuButton").style.top = "9.8rem";
}

