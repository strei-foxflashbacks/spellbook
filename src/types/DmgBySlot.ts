import { DmgType } from './DmgType';

export type DmgBySlot = {
  damage_at_slot_level: {
    [key: string]: string;
  };
  damage_type: DmgType;
};
