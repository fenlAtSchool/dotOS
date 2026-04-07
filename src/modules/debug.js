export default {
    info: {
        name: 'debug',
        type: 'worldcode',
        version: '1.0.0',
        requirements: []
    },
    onLoad(){
        globalThis.debug = {
            debug: [],
            log(){
                debug.debug.push(arguments)
            },
            show(){
                for(let i = 0; i < debug.debug.length; i++){
                    api.log(`D#${i}: ${debug.debug[i]}`)
                }
            }
        }
    },
    callbacks: {}
}