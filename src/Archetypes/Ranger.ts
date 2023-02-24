import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static ArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.ArchetypeInstances += 1;
  }

  override get energyType() {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Ranger.ArchetypeInstances;
  }
}