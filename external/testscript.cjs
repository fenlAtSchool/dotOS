/*new Thread(function* () {
    function hsvToRgb(h, s, v) {
        let r, g, b
        let i = Math.floor(h / 60)
        let f = h / 60 - i
        let p = v * (1 - s)
        let q = v * (1 - f * s)
        let t = v * (1 - (1 - f) * s)

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break
            case 1: r = q, g = v, b = p; break
            case 2: r = p, g = v, b = t; break
            case 3: r = p, g = q, b = v; break
            case 4: r = t, g = p, b = v; break
            case 5: r = v, g = p, b = q; break
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
    }

    yield* thl.require('window')
    let win = new Win([120, 120], [0, 0])
    for (let i = 0; i < 120; i++) {
        for (let j = 0; j < 120; j++) {
            let v = hsvToRgb(i * 2, 1, j/120)
            win.setPixel(i, j, display.findClosestCode(v)[1])
        }
    }
    yield* win.render()
    display.drawDisplay()
    yield* thl.waitUntil(() => display.isIdle())
    api.terminalDrawScreen()
}())*/
new Thread(function*(){
    yield* thl.require('drive')
    yield* thl.require('screen')
    yield* thl.require('window')
    let win = new Win([120, 120], [0,0])
    win.drawImage(yield* execFile('dotOS/data/baboon.dui'), [2, 2])
    yield* win.render()
    display.drawDisplay()
    yield* thl.waitUntil(() => display.isIdle())
    api.terminalDrawScreen()
}())