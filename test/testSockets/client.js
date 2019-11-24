var socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', function(){
    setInterval(() => {
        socket.emit('packetToServer', JSON.stringify({
            uid: 910,
            timestamp: new Date(),
            temperature: 25.000 + 5*(Math.random() - Math.random()),
            humidity: 85.000 + 2*(Math.random() - Math.random()),
            gps: {
              latitude: 74.000000 + 0.1*(Math.random() - Math.random()),
              longitude: -120.000000 + 2.5*(Math.random() - Math.random())
            },
            imu: {
              roll: 45.000000 + 10*(Math.random() - Math.random()),
              pitch: -45.000000 + 25*(Math.random() - Math.random()),
              heading: 100.000000 + 30*(Math.random() - Math.random()),
              altitude: 1.000000 + 0.15*(Math.random() - Math.random()),
            },
            ch4: 120.000000 + 100*(Math.random() - Math.random()),
            airFlow: 45.000000 + 10*(Math.random() - Math.random()),
            batteryLevel: 85.000000 - 5*(Math.random() - Math.random()),
        }))
    }, 2000)
});
socket.on('event', function(data){  console.log('EVENT ' + data) });
socket.on('disconnect', function(){});