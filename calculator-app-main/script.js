const correction = (str) => {
	ah = [""]
	for (const lettre of str) {
		if (["+", "-", "/", "*"].includes(lettre)) {
			ah.push(lettre)
		
		} else if (lettre === "(") {
			if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ")"].includes(ah[ah.length - 1][ah.length - 1])) {
				console.log("uwu");
				ah.push("*")
				ah.push(lettre)
			
			} else {
				ah.push(lettre)
			}
		

		} else if (["+", "-", "/", "*"].includes(ah[ah.length - 1])) {
			ah.push(lettre)
		
		} else {
			ah[ah.length - 1] = ah[ah.length - 1] + lettre
		}
	}
	
	ah = ah
		.map((e) => {
			return isNaN(Number(e)) ? e : Number(e)
		})
		.join("")
	
	if (ah[0] === "0") {ah = ah.substring(1)}
	else {console.log({"ah": typeof(ah)});}
	
	return ah
}

function multiReplace (str, dict = {}) {
  for (const [key, value] of Object.entries(dict)) {
    str = str.replaceAll(key, value)
  }
  return str
}

function claculate(str) {
	if (str == "") {
		return "0"
	}

	let calc = multiReplace(str, {
    "x": "*",
    ",": ".",
    "²": "**2",
    "³": "**3"
  }) 

	// Remove the last character if it is a sign (2+3+ -> 2+3)
	if (["*", "+", "-", "/"].includes(calc.slice(-1))) {
		calc = calc.substring(0, calc.length - 1)
	}

	finalString = correction(calc)

	let result

	try {
		result = eval(finalString)
	} catch (e) {
		return "Error"
	}
	result = Math.floor(result * 10000) / 10000
	result = String(result)
	result = result.replace(".", ",")
	return String(result).includes("Infinity") ? "Error" : String(result)
}

function sign(str) {
  let rVal = document.querySelector(".r-value")
	if (
		!["x", "*", "+", "/"].includes(
			rVal.innerText.slice(-1)
		)
	) {
		rVal.innerText += str
	} else {
		rVal.innerText = rVal.innerText.substring(0, rVal.innerText.length - 1)
		rVal.innerText += str
	}
}

document.querySelectorAll("button").forEach((elt) => {
	elt.addEventListener("click", (e) => {
		let keypressed = e.target.innerText
		let rVal = document.querySelector(".r-value")

		rVal.innerText == "Error" ? (rVal.innerText = "") : rVal.innerText

		if (
			["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "(", ")"].includes(
				keypressed
			)
		) {
			rVal.innerText += keypressed
		} else if (keypressed == "-") {
			if (rVal.innerText[rVal.innerText.length - 1] != "-") {
				rVal.innerText += "-"
			}
		} else if (keypressed == ".") {
			rVal.innerText += ","
		} else if (keypressed == "x²") {
			rVal.innerText += "²"
		} else if (keypressed == "x³") {
			rVal.innerText += "³"
		} else if (keypressed.localeCompare("DEL") == 0) {
			rVal.innerText = rVal.innerText.substring(0, rVal.innerText.length - 1)
		} else if (keypressed.localeCompare("RESET") == 0) {
			rVal.innerText = ""
		} else if (keypressed.localeCompare("=") == 0) {
			rVal.innerText = claculate(rVal.innerText)
		} else {
			sign(keypressed)
		}
	})
})

document.onkeydown = (e) => {
	document.querySelector(".r-value").innerText == "Error"
		? (document.querySelector(".r-value").innerText = "")
		: document.querySelector(".r-value").innerText

	if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")", "²"].includes(e.key)) {
		document.querySelector(".r-value").innerText += e.key
	} else if (e.key == "Backspace") {
		let str = String(document.querySelector(".r-value").innerText)
		document.querySelector(".r-value").innerText = document
			.querySelector(".r-value")
			.innerText.substring(0, str.length - 1)
	} else if (e.key == "Enter") {
		document.querySelector(".r-value").innerText = claculate(
			document.querySelector(".r-value").innerText
		)
	} else if (["+", "*", "x", "/"].includes(e.key)) {
		sign(e.key)

	} else if (e.key == ".") {
		document.querySelector(".r-value").innerText += ","
	} 
}

function themechange() {
	let theme = document.getElementById("theme").value
	let root = document.documentElement.style

	localStorage.setItem("theme", theme)

	if (theme == 0) {
		root.setProperty("--bg-main", "hsl(222, 26%, 31%)")
		root.setProperty("--bg-keypad", "hsl(223, 31%, 20%)")
		root.setProperty("--bg-screen", "hsl(224, 36%, 15%)")

		root.setProperty("--normal-bg", "hsl(30, 25%, 89%)")
		root.setProperty("--normal-shadow", "hsl(28, 16%, 65%)")
		root.setProperty("--del-bg", "hsl(225, 21%, 49%)")
		root.setProperty("--del-shadow", "hsl(224, 28%, 35%)")
		root.setProperty("--equal-bg", "hsl(6, 63%, 50%)")
		root.setProperty("--equal-shadow", "hsl(6, 70%, 34%)")

		root.setProperty("--color-calc", "white")
		root.setProperty("--color-del", "white")
		root.setProperty("--color-equal", "white")
		root.setProperty("--color-key", "hsl(221, 14%, 31%)")
		root.setProperty("--color-result", "white")
	}else if (theme == 1) {
		root.setProperty("--bg-main", "hsl(0, 0%, 90%)")
		root.setProperty("--bg-keypad", "hsl(0, 5%, 81%)")
		root.setProperty("--bg-screen", "hsl(0, 0%, 93%)")

		root.setProperty("--normal-bg", "hsl(45, 7%, 89%)")
		root.setProperty("--normal-shadow", "hsl(35, 11%, 61%)")
		root.setProperty("--del-bg", "hsl(185, 42%, 37%)")
		root.setProperty("--del-shadow", "hsl(185, 58%, 25%)")
		root.setProperty("--equal-bg", "hsl(25, 98%, 40%)")
		root.setProperty("--equal-shadow", "hsl(25, 99%, 27%)")

		root.setProperty("--color-calc", "hsl(60, 10%, 19%)")
		root.setProperty("--color-del", "white")
		root.setProperty("--color-equal", "white")
		root.setProperty("--color-key", "hsl(60, 10%, 19%)")
		root.setProperty("--color-result", "hsl(60, 10%, 19%)")
	} else if (theme == 2) {
		root.setProperty("--bg-main", "hsl(268, 75%, 9%)")
		root.setProperty("--bg-keypad", "hsl(268, 71%, 12%)")
		root.setProperty("--bg-screen", "hsl(268, 71%, 12%)")

		root.setProperty("--normal-bg", "hsl(281, 89%, 26%)")
		root.setProperty("--normal-shadow", "hsl(285, 91%, 52%)")
		root.setProperty("--del-bg", "hsl(268, 47%, 21%)")
		root.setProperty("--del-shadow", "hsl(290, 70%, 36%)")
		root.setProperty("--equal-bg", "hsl(176, 100%, 44%)")
		root.setProperty("--equal-shadow", "hsl(177, 92%, 70%)")

		root.setProperty("--color-calc", "hsl(52, 100%, 62%)")
		root.setProperty("--color-del", "white")
		root.setProperty("--color-equal", "hsl(198, 20%, 13%)")
		root.setProperty("--color-key", "hsl(52, 100%, 62%)")
		root.setProperty("--color-result", "hsl(52, 100%, 62%)")
	} else if (theme == 3) {
		root.setProperty("--bg-main", "hsl(276, 68%, 72%)")
		root.setProperty("--bg-keypad", "hsl(325, 100%, 76%)")
		root.setProperty("--bg-screen", "hsl(325, 100%, 76%)")

		root.setProperty("--normal-bg", "hsl(348, 100%, 78%)")
		root.setProperty("--normal-shadow", "hsl(348, 100%, 68%)")
		root.setProperty("--del-bg", "hsl(20, 100%, 75%)")
		root.setProperty("--del-shadow", "hsl(20, 100%, 65%)")
		root.setProperty("--equal-bg", "hsl(42, 100%, 71%)")
		root.setProperty("--equal-shadow", "hsl(42, 100%, 61%)")

		root.setProperty("--color-calc", "white")
		root.setProperty("--color-del", "white")
		root.setProperty("--color-equal", "white")
		root.setProperty("--color-key", "white")
		root.setProperty("--color-result", "white")
	
	} else if (theme == 4) {
		root.setProperty("--bg-main", "hsl(197, 98%, 40%)")
		root.setProperty("--bg-keypad", "hsl(348, 79%, 76%)")
		root.setProperty("--bg-screen", "hsl(348, 79%, 76%)")

		root.setProperty("--normal-bg", "hsl(197, 94%, 67%)")
		root.setProperty("--normal-shadow", "hsl(197, 94%, 47%)")
		root.setProperty("--del-bg", "hsl(197, 94%, 47%)")
		root.setProperty("--del-shadow", "hsl(197, 94%, 37%)")
		root.setProperty("--equal-bg", "hsl(197, 94%, 77%)")
		root.setProperty("--equal-shadow", "hsl(197, 94%, 67%)")

		root.setProperty("--color-calc", "white")
		root.setProperty("--color-del", "white")
		root.setProperty("--color-equal", "white")
		root.setProperty("--color-key", "white")
		root.setProperty("--color-result", "white")
	}
}


let started = false
if (!started) {
	started = true
	document.getElementById("theme").value = localStorage.getItem("theme")
}