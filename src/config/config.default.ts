import { Tracer } from '../lib/tracer.js';

/**
 * tracer config
 * @member Config#tracer
 * @property {Tracer} Class - tracer class name
 */
interface TracerConfig {
  Class: typeof Tracer;
}

export default {
  tracer: {
    Class: Tracer,
  } as TracerConfig,
};

declare module '@eggjs/core' {
  interface EggAppConfig {
    tracer: TracerConfig;
  }
}
