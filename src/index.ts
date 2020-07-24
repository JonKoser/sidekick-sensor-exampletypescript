
import { SensorPlugin } from 'ldk';
import { Sensor } from './sensor';

const impl = new Sensor();
const sensorPlugin = new SensorPlugin(impl);
sensorPlugin.serve();
