export default {
	info: {
		name: 'data',
		type: 'os',
		version: '1.0.0',
		source: 'github.com/tendergalaxy/dotos/blob/main/src/modules/mountDrive.js',
		requirements: ['FS-async', 'async']
	},
	onLoad() {
		globalThis.mountDrive = { thread: {isIdle(){return false}}, toUpload: toUpload, filesLoaded: false }
		toUpload = null
		mountDrive.thread = new Thread(function* () {
			let f = FS.hash.hashStr('dotOS')
			for (let i = 0; i < 3; i++) {
				api.getBlockId(f - 400000, FS.disk, 0)
				yield
			}
			try {
				FS._getFile(f)
			} catch {
				api.log('Drive not found, making new drive.')
				FS._setFile(f, '[]')
			}
			yield* FS.forceSetFile('dotOS', 'data', '[]')
			api.log('Drive mounted!')
			yield
			for (let i of mountDrive.toUpload) {
				yield* FS.forceSetFile('dotOS/data', i.name, i.contents)
			}
			api.log('Finished loading files!')
			delete globalThis.mountDrive
		}, 'mountDrive.thread')
	},
	callbacks: {
	}
}