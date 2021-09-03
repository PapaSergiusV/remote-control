import { KEYS } from 'typesetter';

export type PressReq = {
  keys: (keyof typeof KEYS)[];
}
