

/*
==============================================
==============================================
*/

/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

/* end scroll to top */



/*  
===============================================
===============================================
*/

/* start our work */

let switcherLis = document.querySelectorAll(".our-work .filters li");
let imgs = Array.from(document.querySelectorAll(".our-work .work-suff .box-suff"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// remove active calss from all lis an add to current 
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// manage imgs 
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
        el.style.display = "block";
    });
}

let linkWork = document.querySelectorAll(".port-2 .filters .item");
function activeWork() {
    linkWork.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
}
linkWork.forEach(l => l.addEventListener("click", activeWork));


/* end our work */


/*
==============================================
==============================================
*/

/* === start footer dateYear === */

window.addEventListener("load", ()=> {
    let dateYear = document.querySelector(".dateYear");
    let newDate = new Date();
    dateYear.innerHTML = newDate.getFullYear();
});

/* === end footer dateYear === */

/*
==============================================
==============================================
*/





