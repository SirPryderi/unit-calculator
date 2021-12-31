export type UnitStat = {
  health: number;
  /** checks whether an attack roll is successful or not */
  defence: number;
  /** damage modifier vs defence */
  attack: number;
  /** max damage (subjected to die roll) */
  damage: number;
};
