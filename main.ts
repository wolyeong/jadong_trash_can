input.onButtonPressed(Button.A, function () {
    count = 0
    pins.servoWritePin(AnalogPin.P1, 0)
})
let count = 0
OLED.init(128, 64)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
count = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        count += 1
        OLED.drawLoading(5 * count)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P1, 90)
        OLED.clear()
    }
})
