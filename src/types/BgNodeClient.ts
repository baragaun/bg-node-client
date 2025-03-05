import { BgDataListener } from './BgDataListener.js';
import { Operations } from './Operations.js';

export interface BgNodeClient {
  addListener: (listener: BgDataListener) => void;
  operations: Operations;
  removeListener: (id: string) => void;
}
