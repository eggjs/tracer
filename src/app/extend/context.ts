import { Context } from '@eggjs/core';
import type { Tracer } from '../../lib/tracer.js';
const TRACER = Symbol('context tracer');

export default class TracerContext extends Context {
  [TRACER]: Tracer | undefined;

  get tracer(): Tracer {
    if (!this[TRACER]) {
      this[TRACER] = new this.app.config.tracer.Class(this);
    }
    return this[TRACER];
  }

  get traceId(): string {
    return this.tracer.traceId;
  }
}

declare module '@eggjs/core' {
  interface Context {
    tracer: Tracer;
    traceId: string;
  }
}
