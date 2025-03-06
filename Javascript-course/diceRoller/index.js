





const rollDice = ()=> {
    const resultT = document.getElementById("textResult")
    const numOfRolls = document.getElementById("numinput").value
    const imgResult = document.getElementById("imgdiv")

    const values = []
    const images = []
    
    for (let i = 0;i<numOfRolls;i++) {
        const roll = Math.floor(Math.random()*6)+1
        const img = `<img src="diceImages/d_${roll}.png"/>`
        values.push(roll)
        images.push(img)
    }
    resultT.textContent = `dice : ${values.join(",")}`
    imgResult.innerHTML = images.join(" ")

}