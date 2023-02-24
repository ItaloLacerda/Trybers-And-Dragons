import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static RacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.RacesInstances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Dwarf.RacesInstances;
  }
}
