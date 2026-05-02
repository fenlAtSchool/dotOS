export default {
	info: {
		name: 'CFF',
		type: 'os',
		version: '1.0.0',
		source: 'github.com/fenlAtSchool/dotOS/blob/main/src/modules/CFF.js',
		requirements: ['FS-async', 'async']
	},
	onLoad() {
		const GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
		globalThis.execFile = function*(f){
			const extension = f.split('.').at(-1)
			const data = {fName: f, fContents: yield* FS.getFileAsync(f)}
			const form = yield* FS.getFileAsync(`dotOS/data/filetypes/impl/${extension}.js`)
			const func = new GeneratorFunction('data', form)
			let val = yield* func(data)
			return val
		}
	},
	callbacks: {
	}
}