const moment = require('moment-timezone');
const screenshot = require('screenshot-desktop');
const webcam = require('node-webcam');
const express = require('express');
const timeEntries = require('../config/notdb.js');

// let screenshotInterval = null;


// How to user WEBSOCKET!!

// function takeScreenshot() {
//   const dateTime = moment().tz('Europe/Istanbul').format('YYYY-MM-DD_HH-mm-ss');
//   const fileName = `screenshot_${dateTime}.png`;

//   const path = require('path');
//   const parentDir = path.join(__dirname, '..', 'screenshot'); // Ana dizinin bir üstündeki screenshot dizinine kaydedilir

//   screenshot({ filename: `${parentDir}/${fileName}` }).then(() => {
//     console.log(`Screenshoot ${fileName} kaydedildi`);
//   });
// }

function startTracking(req, res) {
  res.send('Timer Start');

  // if (!screenshotInterval) {
  //   screenshotInterval = setInterval(takeScreenshot, 10 * 60 * 1000); // 10 dakika * 60 saniye * 1000 milisaniye
  // }
  timeEntries.push({
    start_time: moment().format()
  });
}

function stopTracking(req, res) {
  const lastEntry = timeEntries[timeEntries.length - 1];
  lastEntry.end_time = moment().format();
  res.send('Timer Stop!');
}
module.exports = {stopTracking, startTracking}
