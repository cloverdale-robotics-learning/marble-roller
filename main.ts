// Challenge 1, 2, 3
input.onButtonPressed(Button.A, function () {
    draw = 0
})
// Challenge 2, 3
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
// Challenge 1, 2, 3
input.onButtonPressed(Button.B, function () {
    draw = 1
})
// Challenge 3
let draw = 0
let x = 0
let y = 0
let xspeed = 0
let yspeed = 0
led.setDisplayMode(DisplayMode.Greyscale)
// Base task
basic.forever(function () {
    xspeed = Math.constrain(input.rotation(Rotation.Roll), -90, 90) / 180
    yspeed = Math.constrain(input.rotation(Rotation.Pitch), -90, 90) / 180
    led.unplot(Math.round(x), Math.round(y))
    x += xspeed
    x = Math.constrain(x, 0, 4)
    y += yspeed
    y = Math.constrain(y, 0, 4)
    led.plotBrightness(Math.round(x), Math.round(y), 255)
})
// Challenge 3
basic.forever(function () {
    xspeed = Math.constrain(input.rotation(Rotation.Roll), -90, 90) / 180
    yspeed = Math.constrain(input.rotation(Rotation.Pitch), -90, 90) / 180
    if (draw) {
        led.plotBrightness(Math.round(x), Math.round(y), 63)
    } else {
        led.unplot(Math.round(x), Math.round(y))
    }
    x += xspeed
    x = Math.constrain(x, 0, 4)
    y += yspeed
    y = Math.constrain(y, 0, 4)
    led.plotBrightness(Math.round(x), Math.round(y), 255)
})
// Challenge 1, 2
basic.forever(function () {
    xspeed = Math.constrain(input.rotation(Rotation.Roll), -90, 90) / 180
    yspeed = Math.constrain(input.rotation(Rotation.Pitch), -90, 90) / 180
    if (!(draw)) {
        led.unplot(Math.round(x), Math.round(y))
    }
    x += xspeed
    x = Math.constrain(x, 0, 4)
    y += yspeed
    y = Math.constrain(y, 0, 4)
    led.plotBrightness(Math.round(x), Math.round(y), 255)
})
