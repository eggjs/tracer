import type { EggCore, ILifecycleBoot } from '@eggjs/core';
import { isReady } from './app/extend/application.js';

export class TracerBoot implements ILifecycleBoot {
  constructor(private app: EggCore) {}

  async didLoad() {
    this.app[isReady] = true;
  }
}
