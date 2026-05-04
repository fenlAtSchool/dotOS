/**
 * The DotOS Uncompressed Image (DUI) format
 * First Char - Width
 * Second Char - Height
 * More Chars - Data
 * Expected file size: (width * height) + 2 Characters
 */
yield* thl.require('drive')
yield* thl.require('screen')
let width = data.fContents[0].codePointAt() - 70
let height = data.fContents[1].codePointAt() - 70
let parsedData = data.fContents.slice(2).split('').map(i => i.codePointAt() - 70)
const spl = Math.floor(5000/height)
let out = []
for(let i = 0; i < height; i++){
    if(i % spl == 0) yield
    out.push(parsedData.slice(width * i, width * i + width))
}
return out