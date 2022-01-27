let path = document.querySelector("path")
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + " " + pathLength

path.style.strokeDashoffset = pathLength

window.addEventListener("scroll", () => {
    //what percentage down it is
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    //length to offset the dashes
    let drawLength = pathLength * scrollPercentage

    //draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength

    const target = document.querySelectorAll(".scroll")
    let i = 0, length = target.length
    for (i; i < length; i++) {
        let pos = window.pageYOffset * target[i].dataset.rate
        if (target[i].dataset.direction === "vertical") {
            target[i].style.transform = "translate3d(0px," + pos + "px, 0px)"
        }
        else {
            let posX = window.pageYOffset * target[i].dataset.ratex
            let posY = window.pageYOffset * target[i].dataset.ratey
            target[i].style.transform = "translate3d(" + posX + "px," + posY + "px, 0px)"
        }
    }
})
