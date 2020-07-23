const storageKeyPeriod = "period"
const periodDefault = 1000 * 3 // 3 seconds
const periodMin = 500 // 500 ms
const periodMax = 1000 * 60 // 1 minute

class Sensor {
  async start(host, metadata) {
    this.host = host;
    this.metadata = metadata;

    const period = await getPeriod(host)

    this.loop = setInterval(() => {
      this.host.emitEvent({
        metadata: this.metadata,
        data: {
          text: `Event from example Node sensor: ${new Date()}`,
        },
      });
    }, period);
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

async function getPeriod(host) {
  try {
    const hasKey = await host.storageHasKey(storageKeyPeriod)
  
    // if the key does not already exist, give it a default value
    if (!hasKey) {
      await host.storageWrite(storageKeyPeriod, JSON.stringify(periodDefault))
    }
  
    const period = JSON.parse(await h.host.StorageRead(storageKeyPeriod))
  
    // bound the value of period
    if (period < periodMin) {
      period = periodMin
      await host.storageWrite(storageKeyPeriod, JSON.stringify(periodDefault))
    } else if (period > periodMax) {
      period = periodMax
      await host.storageWrite(storageKeyPeriod, JSON.stringify(periodDefault))
    }
  
    return period;
  } catch (err) {
    console.error(err);
    return periodDefault;
  }
}

module.exports = Sensor;
