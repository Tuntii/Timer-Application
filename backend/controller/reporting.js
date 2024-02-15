const moment = require('moment-timezone');
const screenshot = require('screenshot-desktop');
const webcam = require('node-webcam');
const express = require('express');
const timeEntries = require('../config/notdb.js');
const path = require('path');

function getReport(req, res) {
    const reportData = {
      entries: timeEntries,
      totalHours: timeEntries.reduce((acc, entry) => acc + moment(entry.end_time).diff(moment(entry.start_time), 'hours'), 0),
    };
    res.send(reportData);
  }

  function takeScreenshot(req, res) {
    const dateTime = moment().tz('Europe/Istanbul').format('YYYY-MM-DD_HH-mm-ss');
    let fileName = `screenshot_${dateTime}.png`;
    let filePath = path.join(__dirname, '..' ,'reports', 'screenshot', fileName); 
    screenshot({ filename: filePath }).then((err) => {
        res.send('Screenshot saved');
    });
  }

  function takeCameraPhoto(req, res) {
    const dateTime = moment().tz('Europe/Istanbul').format('YYYY-MM-DD_HH-mm-ss');
    const fileName = `camera_${dateTime}.jpg`;
    let filePath = path.join(__dirname, '..' ,'reports', 'img', fileName);
    webcam.capture(filePath, function(err) {
      
    });
    res.send('Camera saved');
  }
  function getAllPhotos(req,res) {
    const file = path.join(__dirname, '..','reports','img')
  }

module.exports = {takeCameraPhoto, takeScreenshot, getReport}