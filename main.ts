let Angle = 0
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    Angle = pins.map(
    input.lightLevel(),
    0,
    255,
    0,
    180
    )
    servos.P0.setAngle(Angle)
    basic.pause(500)
})
