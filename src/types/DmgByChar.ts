import { DmgType } from './DmgType';

export type DmgByChar = {
  damage_at_character_level: {
    [key: string]: string;
  };
  damage_type: DmgType;
};
