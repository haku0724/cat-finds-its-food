input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    cat.change(LedSpriteProperty.Y, 1)
    if (cat.isTouching(dog)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
        basic.pause(5000)
    }
    if (cat.isTouching(food)) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 40), music.PlaybackMode.InBackground)
        basic.showString("CAT IS HAPPY:))))))")
    } else {
        game.resume()
    }
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    cat.change(LedSpriteProperty.X, 1)
    if (cat.isTouching(dog)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
        basic.pause(5000)
    }
    if (cat.isTouching(food)) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 40), music.PlaybackMode.InBackground)
        basic.showString("CAT IS HAPPY:))))))")
    } else {
        game.resume()
    }
})
let food: game.LedSprite = null
let dog: game.LedSprite = null
let cat: game.LedSprite = null
basic.showString("HELLO!PLAYER!")
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
}
basic.showString("START!")
cat = game.createSprite(0, 0)
dog = game.createSprite(2, 2)
food = game.createSprite(5, 5)
