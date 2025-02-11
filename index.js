function urlImg(number) {
    return `./images/dice${number}.png`

}

let buttonClickEventHandler = document.getElementById("btn")
buttonClickEventHandler.onclick = () => {
    let random1 = Math.floor(Math.random() * 6) + 1
    let random2 = Math.floor(Math.random() * 6) + 1

    document.getElementById("img1").setAttribute("src", urlImg(random1))
    document.getElementById("img2").setAttribute("src", urlImg(random2))

}