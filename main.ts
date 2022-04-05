let X = 0
let Y = 0
led.plot(2, 2)
basic.forever(function () {
    if (Y > -200) {
        led.unplot(2, 1)
        led.unplot(2, 0)
    }
    if (Y < -200) {
        led.plot(2, 1)
        led.unplot(2, 0)
    }
    if (Y < -500) {
        led.plot(2, 0)
    }
})
basic.forever(function () {
    if (Y < 200) {
        led.unplot(2, 3)
        led.unplot(2, 4)
    }
    if (Y > 200) {
        led.plot(2, 3)
        led.unplot(2, 4)
    }
    if (Y > 500) {
        led.plot(2, 4)
    }
})
basic.forever(function () {
    X = input.acceleration(Dimension.X)
    Y = input.acceleration(Dimension.Y)
})
basic.forever(function () {
    if (X < 200) {
        led.unplot(3, 2)
        led.unplot(4, 2)
    }
    if (X > 200) {
        led.plot(3, 2)
        led.unplot(4, 2)
    }
    if (X > 500) {
        led.plot(4, 2)
    }
})
basic.forever(function () {
    if (X > -200) {
        led.unplot(1, 2)
        led.unplot(0, 2)
    }
    if (X < -200) {
        led.plot(1, 2)
        led.unplot(0, 2)
    }
    if (X < -500) {
        led.plot(0, 2)
    }
})
