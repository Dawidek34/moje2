bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.SmallSquare)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Square)
    kitronik_servo_lite.stop()
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        kitronik_servo_lite.forward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        kitronik_servo_lite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        kitronik_servo_lite.backward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        kitronik_servo_lite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        kitronik_servo_lite.left()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        kitronik_servo_lite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        kitronik_servo_lite.right()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        kitronik_servo_lite.stop()
    }
})
basic.showString("Siemanko !")
basic.showLeds(`
    . # . . #
    . # . # .
    . # # . .
    . # . # .
    . # . . #
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    . # . # .
    # # # # #
    # . . . #
    `)
basic.showLeds(`
    . # # # #
    . # . . .
    . # . . .
    . # . . .
    . # # # #
    `)
basic.showLeds(`
    . # # # #
    . # . . #
    . # # # #
    . # . . .
    . # . . .
    `)
basic.showLeds(`
    . # # # #
    . # . . .
    . # # # .
    . # . . .
    . # # # #
    `)
basic.showLeds(`
    . # # # #
    . # . . #
    . # # # #
    . # . # .
    . # . . #
    `)
