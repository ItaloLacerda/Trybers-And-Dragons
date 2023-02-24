import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static RacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.RacesInstances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Elf.RacesInstances;
  }
}