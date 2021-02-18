const navbar = document.getElementById("navbar")
const navbarStick = navbar.offsetTop
const liveChat = document.getElementById("live-chat")
const liveChatStick = liveChat.offsetTop

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= navbarStick + 50) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
    if (window.pageYOffset >= liveChatStick + 200) {
        liveChat.classList.add("opacity-0")
        document.querySelector(".empty-live").style.height = "31rem"
        liveChat.classList.add("picture-in-picture")
    } else {
        liveChat.classList.add("opacity-100")
        document.querySelector(".empty-live").style.height = "0"
        liveChat.classList.remove("picture-in-picture")
    }
})
