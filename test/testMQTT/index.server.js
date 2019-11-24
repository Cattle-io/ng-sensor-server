// controller.js
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')

var garageState = ''
var connected = false

client.on('connect', () => {
  console.log('MQTT BROKER CONNECTED');
  client.subscribe('cattleio/packets');
})

client.on('message', (topic, message) => {
    console.log(' MQTT Message ' + message);
})


