class Sensor {
  constructor() {
    this.config = {
      foo: 'bar',
    };
  }

  start(host, metadata) {
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

  stop() {
    clearInterval(this.loop);
  }

  config() {
    return this.config;
  }

  setConfig(config) {
    this.config = config;
  }

  onEvent() {
  }
}

module.exports = Sensor;
