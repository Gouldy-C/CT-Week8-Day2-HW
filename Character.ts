export default abstract class Characters{

  constructor(protected equipWeapon: string,
              protected equipDefenses:string,
              protected goldValue: number){
    this.equipWeapon = equipWeapon
    this.equipDefenses = equipDefenses
    this.goldValue = goldValue
  }


  get gold(): number {
    return this.goldValue
  }
  set gold(value: number) {
    this.goldValue + value >= 0 ? this.goldValue += value : console.log('Inefficient gold')
  }

  get weapon(): string {
    return this.equipWeapon
  }
  set weapon(value: string) {
    this.equipWeapon = value
  }

  get defenses():string{
    return this.equipDefenses
  }
  set defenses(value:string){
    this.equipDefenses = value
  }

  abstract attack():void
  abstract defend():void
}
