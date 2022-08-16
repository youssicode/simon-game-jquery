let gamePattern = []
let userClickedPattern = []
let buttonColours = ["red", "blue", "green", "yellow"]
let level = 0
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    // Animate the button
    animatePress(randomChosenColour)
    // Playing the sound
    playSound(randomChosenColour)
    level += 1
    console.log(gamePattern)
}

let starter = 0
$(".btn").click(function () {
    let userChosenColour = $(this).attr("id") // ORsimply ..= this.id
    animatePress(userChosenColour)
    if (gamePattern[starter] != userChosenColour) {
        playSound("wrong")
        $("h1").text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
        startOver()
        return
    }
    playSound(userChosenColour)
    starter++
    userClickedPattern.push(userChosenColour)
})

function playSound(name) {
        //1st method
        let sound = new Audio(`./sounds/${name}.mp3`)
        sound.play()
    // 2nd Method
        // let soundElemenet = document.createElement("audio")
        // soundElemenet.src = `./sounds/${name}.mp3`
        // soundElemenet.play()
}
function animatePress(currentColour) {
    // $(`div#${currentColour}`).fadeOut(100).fadeIn(100)
    $(`#${currentColour}`).addClass("pressed")
    setTimeout(() => {
        $(`#${currentColour}`).removeClass("pressed")
    }, 100);
}

$(document).keypress(ev => {
    $("h1").text("level " + level)
    nextSequence()
    userClickedPattern = []
    starter = 0
})

function startOver() {
    gamePattern = []
    userClickedPattern = []
    starter = 0
    level = 0
}