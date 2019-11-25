// controller.js
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')

var garageState = ''
var connected = false

client.on('connect', () => {
  console.log('MQTT BROKER CONNECTED');

  client.subscribe('cattleio/packets', function (err) {
    if (!err) {
      setInterval(() => {
        const packetObj = {
          uid: "NODEMCU_901",
          timestamp: (new Date().toISOString()),
          temperature: 25.000 + (2*(Math.random() - Math.random()) + 0.25)*(Math.random()*Math.random() - Math.random()*Math.random()),
          humidity: 85.03 + 2.2*(Math.random() - Math.random()),
          gps: {
            latitude: 73 + 1.05545*(Math.random()*Math.random() - Math.random()),
            longitude: 121.9963422 + 1.2*(Math.random() - Math.random()*Math.random()) ,
          },
          imu: {
            roll: 0 +  3.5*(Math.random()*Math.random() - Math.random()*Math.random()),
            pitch: 2 + 1.5*(Math.random()*Math.random() - Math.random()*Math.random()),
             heading: 2 + 1.05*(Math.random() - Math.random()),
            altitude: 1.054 + 2.325*(Math.random() - 0.5*Math.random()),
          },
          ch4: 155.5343 + 50*(0.9*Math.random() - 0.5*Math.random()),
          airFlow: 65 + 10*(Math.random() - Math.random()),
          batteryLevel: 75 + 2.5*(0.5*Math.random()*Math.random() - 2.5*Math.random()*Math.random())
        }
        client.publish('cattleio/packets', JSON.stringify(packetObj));
    },1000);
    }
  })


})



client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic.toString())
  //console.log(message.toString())
})