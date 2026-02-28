{
  info: {
    name: 'user',
    type: 'os',
    version: '1.0.0',
    requirements: [],
    source: 'github.com/tendergalaxy/dotOS/blob/main/src/modules/getUserId.js'
  },
  callbacks: {
    onLoad(){
      dotOS.user = myId
    }
  }
}
