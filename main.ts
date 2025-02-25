basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, Math.map(pins.analogReadPin(AnalogReadWritePin.P1), 0, 1023, 0, 180))
})
