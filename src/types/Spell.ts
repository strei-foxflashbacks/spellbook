import { BasicSubType } from './BasicSubType';
import { DmgByChar } from './DmgByChar';
import { DmgBySlot } from './DmgBySlot';

export type Spell = {
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: ('V' | 'S' | 'M')[];
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  school: BasicSubType;
  classes: BasicSubType[];
  higher_level: string[];
  material?: string;
  attack_type?: string;
  area_of_effect?: {
    size: number;
    type: 'sphere' | 'cone' | 'cylinder' | 'line' | 'cube';
  };
  damage?: DmgByChar | DmgBySlot;
  dc?: {
    dc_type: BasicSubType;
    dc_success: string;
    desc?: string;
  };
  subclasses?: BasicSubType[];
  url?: string;
};
