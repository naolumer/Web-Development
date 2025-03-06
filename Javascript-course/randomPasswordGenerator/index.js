
const generatePass = ()=> {
    const selectedLength = document.getElementById("selectedlength").value
    const generatedPassword = document.getElementById("result")

    const charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
         'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
        '!', '@', '#', '$', '%', '&', '+',  
         '?', '/'];
    
    let password=[];
    
    for (let i=0; i<selectedLength; i++) {
        const randomIndex = Math.floor(Math.random()*charArray.length) + 1
        password.push(charArray[randomIndex])
    }

    generatedPassword.textContent=password.join("")
   
}

