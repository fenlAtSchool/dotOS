export default {
    info: {
        name: 'terminal',
        type: 'os',
        requirements: []
    },
    onLoad(){
        new Thread(function*(){
            let Terminal = class {
                constructor(){
                    this.cwd = 'dotOS'
                }
                *runc(cmd){
                    cmd = cmd.split(' ')
                    yield* this[cmd[0]](cmd.slice(1))
                }
                *run(cmds){
                    let v = cmds.split('\n')
                    for(let i of v){
                        yield* this.runc(i)
                    }
                }
                *ls(){
                    let f = yield* FS.getFileAsync(this.cwd)
                    api.log(JSON.parse(f).map(i => i.name).join(', '))
                }
                *cd(pl){
                    if(pl == '..'){
                        this.cwd = this.cwd.split('/').slice(0,-1).join('/')
                    }
                    this.cwd += '/' + pl
                }
                *touch(f){
                    let v = yield* FS.newFileAsync(this.cwd, f, '')
                    yield* thl.sleep(v)
                }
            }
            yield* thl.require('drive')
            globalThis.terminal = new Terminal()
            thl.send('terminal')
        }())
    },
    callbacks: {}
}