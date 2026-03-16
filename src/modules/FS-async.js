obj = {
  info: {
    name: 'FS-async',
    type: 'os',
    version: '1.0.0',
    source: 'github.com/tendergalaxy/dotOS/blob/main/src/modules/FS-async.js',
    requirements: ['async']
  },
  callbacks: {
    onLoad(){
      globalThis.asyncFS = class extends disk {
        *getFileAsync(f){
          let t = this.hash.hashStr(f)
          yield* this._loadFile(t)
          return this._getFile(t)
        }
        *setFileAsync(f, c){
          let t = this.hash.hashStr(f)
          yield* this._loadFile(t)
          this._setFile(f, c)
        }
        *newFileAsync(p, n, c){
          yield* this.loadFile(p)
          yield* this.loadFile(p + '/' + n)
          this.newFile(p, n, c)
        }
        *_loadFile(f){
          while(!this._isFileLoaded(f)){
            yield
          }
        }
        *loadFile(f){
          yield* this._loadFile(this.hash.hashStr(f))
        }
        *forceSetFile(p, n, c){
          yield* this.loadFile(p)
          yield* this.loadFile(p + '/' + n)
          if(this.isFileValid(p)){
            this.setFile(p + '/' + n, c)
          } else {
            this.newFile(p, n, c)
          }
        }
        *setFileDefault(p, n, c){
          yield* this.loadFile(p)
          if(!this.isFileValid(p)){
            yield* this.loadFile(p + '/' + n)
            this.newFile(p, n, c)
          }
        }
      }
      globalThis.FS = new asyncFS(-1728)
    }
  }
}
obj