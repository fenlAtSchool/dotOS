const fs = require('fs').promises
const path = require('node:path')
async function main() {
	api = await import('./api.js')
	api = api.default
	const worldCode = await fs.readFile(path.join(__dirname, '..', 'build/worldcode.cjs'), { encoding: 'utf8' })
	eval(worldCode)
	callbacks = await fs.readFile(path.join(__dirname, 'callbacks.json'), { encoding: 'utf8' })
	console.log('DotOS Env: WC Loaded')
	myId = '-1'
	const files = await fs.readFile(path.join(__dirname, '..', 'build/files.cjs'), { encoding: 'utf8' })
	eval(files)
	const codeBlock = await fs.readFile(path.join(__dirname, '..', 'build/codeblock.cjs'), { encoding: 'utf8' })
	eval(codeBlock)
	const interval = setInterval(() => { tick() }, 50)
	let m = new Thread(function*(){
		while(1){
			console.log(TS.tick)
			yield
		}
	})
	globalThis.e9asjz = function(){
		api.log(TS.tick)
		TS.setTimeout(e9asjz, 60)
	}
	e9asjz()
}
main()
// ctrl + c	