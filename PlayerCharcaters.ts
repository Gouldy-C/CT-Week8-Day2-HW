import Characters from "./Character";


interface PlayerCharacters extends Characters{
  name:string
  readonly type:string
  readonly controlType:string
}

class Orge extends Characters implements PlayerCharacters{
  readonly type:string = 'Orge'
  readonly controlType:string = 'Player'
  name:string

  constructor(name:string,
              equipWeapon:string='Club',
              equipDefenses:string='Shield',
              goldValue:number=0){
      super(equipWeapon,equipDefenses,goldValue)
      this.name = name
    }

  attack():void{
  console.log(`${this.name} the ${this.type}: Attacks with ${this.weapon}`)
  }
  defend():void{
    console.log(`${this.name} the ${this.type}: Defends with ${this.defenses}`)
  }
}


class Peons extends Characters implements PlayerCharacters{
  readonly type:string = 'Peon'
  readonly controlType:string = 'Player'
  name:string

  constructor(name:string,
              equipWeapon:string='Club',
              equipDefenses:string='Shield',
              goldValue:number=0){
      super(equipWeapon,equipDefenses,goldValue)
      this.name = name
    }

  attack():void{
  console.log(`${this.name} the ${this.type}: Attacks with ${this.weapon}`)
  }
  defend():void{
    console.log(`${this.name} the ${this.type}: Defends with ${this.defenses}`)
  }
}


class Knight extends Characters implements PlayerCharacters{
  readonly type:string = 'Knight'
  readonly controlType:string = 'Player'
  name:string

  constructor(name:string,
              equipWeapon:string='Sword',
              equipDefenses:string='Armor',
              goldValue:number=0){
      super(equipWeapon,equipDefenses,goldValue)
      this.name = name
    }

  attack():void{
  console.log(`${this.name} the ${this.type}: Attacks with ${this.weapon}`)
  }
  defend():void{
    console.log(`${this.name} the ${this.type}: Defends with ${this.defenses}`)
  }
}


class Archer extends Characters implements PlayerCharacters{
  readonly type:string = 'Archer'
  readonly controlType:string = 'Player'
  name:string

  constructor(name:string,
              weapon:string='a Bow and Arrow',
              defenses:string='Tunic',
              goldValue:number=0){
      super(weapon,defenses,goldValue)
      this.name = name
    }

  attack():void{
  console.log(`${this.name} the ${this.type}: Attacks with ${this.weapon}`)
  }
  defend():void{
    console.log(`${this.name} the ${this.type}: Defends with ${this.defenses}`)
  }
}

const PCList:PlayerCharacters[] = [new Orge('Smash'), new Peons('Mark'), new Knight('Sir Dan'), new Archer('Fred')]

for (const c of PCList){
  c.attack()
  c.defend()
  c.gold = 5
  console.log(c.weapon);
  console.log(c.defenses);
  console.log(c.gold);
}

PCList[0].gold = 10
PCList[1].gold = -4

for (const c of PCList){
  console.log(c.name);
  console.log(c.gold);
}