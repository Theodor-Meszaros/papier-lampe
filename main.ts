function licht_anmachen () {
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 10)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 20)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 30)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 40)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 50)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 60)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 70)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 80)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 90)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 100)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 110)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 120)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 130)
    basic.pause(50)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 140)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 150)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 160)
    basic.pause(10)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 170)
    basic.pause(100)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 180)
    basic.pause(100)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 190)
    basic.pause(100)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 200)
    basic.pause(100)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 225)
}
let abweichung = 0
let akktuell = 0
basic.turnRgbLedOff()
let grundwert = input.compassHeading()
let schnellwert = 50
basic.forever(function () {
    akktuell = input.compassHeading()
    abweichung = Math.abs(akktuell - grundwert)
    if (abweichung > 180) {
        abweichung = 360 - abweichung
    }
    if (abweichung > schnellwert) {
        licht_anmachen()
    } else {
        basic.setLedColor(0x0000ff)
    }
})
