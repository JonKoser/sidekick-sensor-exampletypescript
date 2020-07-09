
const { SensorPlugin } = require('ldk');
const Sensor = require('./sensor');

const impl = new Sensor();
const sensorPlugin = new SensorPlugin(impl);
sensorPlugin.serve();
