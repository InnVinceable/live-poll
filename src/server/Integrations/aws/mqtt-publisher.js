var awsConfig = require('../../../../config.js').AWS_CONFIG;
var awsIot = require('aws-iot-device-sdk');
var path = require('path');
var DEVICE_READY = false;

console.log('Setting up client');
var device = awsIot.device({
    keyPath: awsConfig.AWS_IOT_PRIVATE_KEY_PATH,
   certPath: awsConfig.AWS_IOT_CERT_PATH,
     caPath: awsConfig.AWS_IOT_CA_PATH,
   clientId: awsConfig.AWS_IOT_CLIENT_ID,
       host: awsConfig.AWS_IOT_HOST
});
console.log('Setup done');
console.log('Connecting...');
device
    .on('connect', function() {
        DEVICE_READY = true;
        console.log('Connected');
        onReady();
    })
    .on('error', function(error) {
        console.log(error);
    })
    .on('timeout', function(error) {
        console.log('timeout');
    });

function publish(topic, message) {
    console.log('publishing');
    if (DEVICE_READY)
        device.publish(topic, JSON.stringify(message));
}

const awsClient = (onReady) => {
    
}

module.exports = awsClient;