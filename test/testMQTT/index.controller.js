// controller.js
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')

var garageState = ''
var connected = false

client.on('connect', () => {
  console.log('MQTT BROKER CONNECTED');
  setInterval(() => {
      const packet = '$8,34,23,22,44,' + Math.random() +',' + (new Date().toISOString());
      client.publish('cattleio/packets', packet);
  },1000)
})
