Y = 0
X = 0
led.plot(2, 2)

def on_forever():
    if X < 50:
        led.unplot(3, 2)
        led.unplot(4, 2)
    if X > 50:
        led.plot(3, 2)
        led.unplot(4, 2)
    if X > 500:
        led.plot(4, 2)
basic.forever(on_forever)

def on_forever2():
    global X, Y
    X = input.acceleration(Dimension.X)
    Y = input.acceleration(Dimension.Y)
basic.forever(on_forever2)
