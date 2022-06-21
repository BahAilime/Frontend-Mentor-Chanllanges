let btns = document.querySelector(".btns")
let sub = document.querySelector(".sub")

for (btn of btns.children) {
    btn.addEventListener("click", (e) => {
        console.log(e.target.innerText)
        for (btn of btns.children) {btn.classList.toggle("active", false)}
        e.target.classList.toggle("active", true)
        localStorage.setItem("selected", e.target.innerText)
    }) 
    
}

sub.addEventListener("click", (e) => {
    document.querySelector(".stars").classList.toggle("transition", true)
    document.querySelector(".selected").innerText = getActive()
})

function getActive() {
    for (btn of btns.children) {
        if (btn.classList.contains("active")) {
            return btn.innerText
        }
    }
}

(function init() {
    let s = localStorage.getItem("selected")
    for (btn of btns.children) {
        if (btn.innerText == s) {
            btn.classList.toggle("active", true)
        }
    }
})()