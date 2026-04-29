input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.EighthNote)
    music.play(music.stringPlayable("G F G A F F E D ", 120), music.PlaybackMode.UntilDone)
    music.stopAllSounds()
})
