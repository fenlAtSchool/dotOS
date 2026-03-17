{
  info: {
    name: 'player-abstract',
    type: 'os',
    version: '1.0.0',
    source: 'github.com/tendergalaxy/dotOS/blob/main/src/modules/player-abstraction.js',
    requirements: ['FS-async']
  },
  callbacks: {
    onLoad(){
      globalThis.Player = class {
        constructor(id){
          this.id = id
          this.name = api.getEntityName(id)
          this.dbId = api.getPlayerDbId(this.id)
          this.party = api.getPlayerPartyWhenJoined(this.id)
          this.loggedIn = api.playerIsLoggedIn(this.id)
        }
        get pos(){
          return api.getPosition(this.id)
        }
        get playing(){
          return api.playerIsInGame(this.id)
        }
        get coordsStandingOn(){
          return api.getBlockCoordinatesPlayerStandingOn(this.id)
        }
        get blocksStandingOn(){
          return api.getBlockTypesPlayerStandingOn(this.id)
        }
        get coordsIn(){
          return api.getUnitCoordinatesLifeformWithin(this.id)
        }
        get shieldAmount(){
          return api.getShieldAmount(this.id)
        }
        get hp(){
          return api.getHealth(this.id)
        }
        setShieldAmount(val){
          api.setShieldAmount(this.id, val)
        }
        setPos(){
          api.setPosition(this.id, arguments.flat(Infinity))
        }
        movePos(){
          let t = arguments.flat(Infinity)
          let l = this.pos
          api.setPosition(id, [l[0]+t[0],l[1]+t[1],l[2]+t[2]])
        }
        
      }
    }
  }
}
