const express = require('express');
const moment = require('moment-timezone');
const screenshot = require('screenshot-desktop');
const webcam = require('node-webcam');
const reporting = require('./controller/reporting'); 
const tracking = require('./controller/tracking');
const {exec} = require('child_process');

const router = express();
router.use(express.json()); 


// Electron uygulamasını başlatmak için fonksiyon

// Rota tanımları
router.post('/start', tracking.startTracking);
router.post('/stop', tracking.stopTracking);
router.get('/report', reporting.getReport);
router.get('/screenshot', reporting.takeScreenshot);
router.get('/camera', reporting.takeCameraPhoto);

// Uygulamayı başlatma
function start() {
  router.listen(3000, () => {
    console.log('Back-end is online!!!! http://localhost:3000');
  });
}


module.exports  = { router, start}
