
const { HarvesterPlugin } = require('ldk');
const Harvester = require('./harvester');

const impl = new Harvester();
const harvesterPlugin = new HarvesterPlugin(impl);
harvesterPlugin.serve();

