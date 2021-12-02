radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 1000; index++) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 200)
        music.playMelody("C5 C C5 C C5 C C5 C ", 200)
        music.playMelody("C5 C C5 C C5 C C5 C ", 200)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("C5 C C5 C C5 C C5 C ")
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        # . . . #
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        # . . . #
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        # . . . #
        . . . . .
        # # . # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
})
