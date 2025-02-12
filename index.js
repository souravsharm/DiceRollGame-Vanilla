function urlImg(number) {
    return `./images/dice${number}.png`

}

let buttonClickEventHandler = document.getElementById("btn")
buttonClickEventHandler.onclick = () => {
    let random1 = Math.floor(Math.random() * 6) + 1
    let random2 = Math.floor(Math.random() * 6) + 1

    document.getElementById("img1").setAttribute("src", urlImg(random1))
    document.getElementById("img2").setAttribute("src", urlImg(random2))
    
    if(random1 > random2){
        document.querySelector("h1").innerText = "Player 1 wins!"
    }
    else if(random2 === random1){
        document.querySelector("h1").innerText = "Its a Draw!"

    }else{
        document.querySelector("h1").innerText = "Player 2 wins!"

    }

}

