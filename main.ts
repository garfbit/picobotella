let sel = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    sel = randint(1, 7)
    if (sel == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (sel == 2) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (sel == 3) {
        basic.showArrow(ArrowNames.East)
    } else if (sel == 4) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (sel == 5) {
        basic.showArrow(ArrowNames.South)
    } else if (sel == 6) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (sel == 7) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
