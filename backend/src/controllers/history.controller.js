var express = require('express');
var router = express.Router();

var historyDataService = require('../service/historyDataService');

const mapping = 'history';

router.get(`/${mapping}`, function(req, res, next) {

  let historyArray = historyDataService.getHistoryArray();
  historyArray = historyArray && Array.isArray(historyArray) ? historyArray : []

  res.status(200).json({ok: true, history: historyArray});
});

router.post(`/${mapping}`, function(req, res, next) {

  const query = req.body.query;
  
  historyDataService.addToHistory(query).then(historyArray => {
    res.status(200).json({ok: true, history: historyArray});
  }).catch(error => {
    res.status(200).json({ok: false, message: 'Failed to Add history.', additional: error.message});
  });
});

module.exports = router;
