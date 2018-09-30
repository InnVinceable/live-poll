var awsConfig = require('../../../../config.js').AWS_CONFIG;
var awsIot = require('aws-iot-device-sdk');
var path = require('path');
var DEVICE_READY = false;

var device = {};

const awsClient = {
    setupDevice: () => {
        var promise = new Promise((resolve, reject) => {
            console.log('Setting up client');
            device = awsIot.device({
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
                    resolve();
                })
                .on('error', function(error) {
                    reject(error);
                })
                .on('timeout', function(error) {
                    reject(error);
                });
        });
        return promise;
    },
    publish: (topic, message) => {
        console.log('publishing');
        if (DEVICE_READY) {
            device.publish(topic, JSON.stringify(message));
            console.log('published');
        }
    }
}

module.exports = awsClient;
