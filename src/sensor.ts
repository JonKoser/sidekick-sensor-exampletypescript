import { hostIfc, configIfc, SensorIfc } from './types';

export class Sensor implements SensorIfc {
  configSettings: configIfc;
  host: hostIfc;
  loop: NodeJS.Timeout;
  metadata: Object;

  constructor() {
    this.configSettings = {
      foo: 'bar',
    };
  }

  start(host: hostIfc, metadata: Object): void {
    this.host = host;
    this.metadata = metadata;

    this.loop = setInterval(() => {
      this.host.emitEvent({
        metadata: this.metadata,
        data: {
          text: `Event from example Node sensor: ${new Date()}`,
        },
      });
    }, 3000);
  }

  stop(): void {
    clearInterval(this.loop);
  }

  config(): configIfc {
    return this.configSettings;
  }

  setConfig(config: configIfc): void {
    this.configSettings = config;
  }

  onEvent(): void {
  }
}
