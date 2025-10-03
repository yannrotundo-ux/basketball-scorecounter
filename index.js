let scoreElHome = document.getElementById("scorehome-el")
let scoreElGuest = document.getElementById("scoreguest-el")

let homeScore = 0
let guestScore = 0

scoreElHome.textContent = homeScore
scoreElGuest.textContent = guestScore

function add1home (){
    homeScore += 1
    scoreElHome.textContent = homeScore
      
}


function add2home (){
    homeScore += 2
    scoreElHome.textContent = homeScore
      
}

function add3home (){
    homeScore += 3
    scoreElHome.textContent = homeScore
      
}

function add1guest (){
    guestScore += 1
    scoreElGuest.textContent = guestScore
      
}

function add2guest (){
    guestScore += 2
    scoreElGuest.textContent = guestScore
      
}

function add3guest (){
    guestScore += 3
    scoreElGuest.textContent = guestScore
      
}




console.log(homeScore)



