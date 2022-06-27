const colorPicker = document.getElementById("favcolor")
const GetColorSchemeBtn = document.getElementById("get-btn")
let tileOne = document.getElementById("tile1")
let tileTwo = document.getElementById("tile2")
let tileThree = document.getElementById("tile3")
let tileFour = document.getElementById("tile4")
let tileFive = document.getElementById("tile5")
const hexOne = document.getElementById("hex1")
const hexTwo = document.getElementById("hex2")
const hexThree = document.getElementById("hex3")
const hexFour = document.getElementById("hex4")
const hexFive = document.getElementById("hex5")




///GET COLOR SCHEME BUTTON
GetColorSchemeBtn.addEventListener("click", function () {
    const seedColor = document.getElementById("favcolor").value
    newSeedColor = seedColor.slice(1)
    const chosenScheme = document.getElementById("color-schemes").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${newSeedColor}&mode=${chosenScheme}&count=6`)
        .then(res => res.json())
        .then(data => {
            tileOne.style.backgroundColor = data.colors[0].hex.value
            tileTwo.style.backgroundColor = data.colors[1].hex.value
            tileThree.style.backgroundColor = data.colors[2].hex.value
            tileFour.style.backgroundColor = data.colors[3].hex.value
            tileFive.style.backgroundColor = data.colors[4].hex.value
            hexOne.textContent = data.colors[0].hex.clean
            hexTwo.textContent = data.colors[1].hex.clean
            hexThree.textContent = data.colors[2].hex.clean
            hexFour.textContent = data.colors[3].hex.clean
            hexFive.textContent = data.colors[4].hex.clean
            console.log(data)
        }

        )
})