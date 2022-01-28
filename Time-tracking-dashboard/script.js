let state = "weekly"

document.getElementById("d").onclick = (a) => {
    state = "daily"
    changeState()
}

document.getElementById("w").onclick = () => {
    state = "weekly"
    changeState()
}

document.getElementById("m").onclick = () => {
    state = "monthly"
    changeState()
}

function changeState() {
    // Terporary turn off the colored buttons
    document.getElementById("d").classList.toggle("btn-actif", false)
    document.getElementById("w").classList.toggle("btn-actif", false)
    document.getElementById("m").classList.toggle("btn-actif", false)
    

    // Turn on the right one
    if (state == "daily") {
        document.getElementById("d").classList.toggle("btn-actif", true)
    } else if (state == "weekly") {
        document.getElementById("w").classList.toggle("btn-actif", true)
    } else if (state == "monthly") {
        document.getElementById("m").classList.toggle("btn-actif", true)
    }
    

    // Changes the values of hrs for each action
    document.querySelector(".hrs1").innerHTML = data[0]["timeframes"][state]["current"] + (data[0]["timeframes"][state]["current"] > 1 ? "hrs" : "hr") 
    document.querySelector(".last1").innerHTML = "Last Week - " + data[0]["timeframes"][state]["previous"] + (data[0]["timeframes"][state]["previous"] > 1 ? "hrs" : "hr") 
    
    document.querySelector(".hrs2").innerHTML = data[1]["timeframes"][state]["current"] + (data[1]["timeframes"][state]["current"] > 1 ? "hrs" : "hr") 
    document.querySelector(".last2").innerHTML = "Last Week - " + data[1]["timeframes"][state]["previous"] + (data[1]["timeframes"][state]["previous"] > 1 ? "hrs" : "hr") 
    
    document.querySelector(".hrs3").innerHTML = data[2]["timeframes"][state]["current"] + (data[2]["timeframes"][state]["current"] > 1 ? "hrs" : "hr") 
    document.querySelector(".last3").innerHTML = "Last Week - " + data[2]["timeframes"][state]["previous"] + (data[2]["timeframes"][state]["previous"] > 1 ? "hrs" : "hr") 
    
    document.querySelector(".hrs4").innerHTML = data[3]["timeframes"][state]["current"] + (data[3]["timeframes"][state]["current"] > 1 ? "hrs" : "hr") 
    document.querySelector(".last4").innerHTML = "Last Week - " + data[3]["timeframes"][state]["previous"] + (data[3]["timeframes"][state]["previous"] > 1 ? "hrs" : "hr") 
    
    document.querySelector(".hrs5").innerHTML = data[4]["timeframes"][state]["current"] + (data[4]["timeframes"][state]["current"] > 1 ? "hrs" : "hr") 
    document.querySelector(".last5").innerHTML = "Last Week - " + data[4]["timeframes"][state]["previous"] + (data[4]["timeframes"][state]["previous"] > 1 ? "hrs" : "hr") 
    
    document.querySelector(".hrs6").innerHTML = data[5]["timeframes"][state]["current"] + (data[5]["timeframes"][state]["current"] > 1 ? "hrs" : "hr") 
    document.querySelector(".last6").innerHTML = "Last Week - " + data[5]["timeframes"][state]["previous"] + (data[5]["timeframes"][state]["previous"] > 1 ? "hrs" : "hr") 
}

changeState()
