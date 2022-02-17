var express = require('express');
var router = express.Router();

const axios = require('axios');
const searchResponseHelper = require('../helpers/searchResponseHelper')
const historyDataService = require('../service/historyDataService')

const mapping = 'search';

const generateQueryUrl = (query) => `https://api.duckduckgo.com/?q=${query}&format=json`;

/* GET home page. */
router.get(`/${mapping}`, function(req, res, next) {

  const query = req.query.q;

  axios.get(generateQueryUrl(query)).then(response => {

    const topics = response.data.RelatedTopics;
    const responseArray = searchResponseHelper.parse(topics);

    historyDataService.addToHistory(query)

    res.status(200).json({ok: true, array: responseArray});
  }).catch(error => {
    res.status(200).json({ok: false, message: 'Failed to fetch duck duck go data.', additional: error.message});
  });
});

router.post(`/${mapping}`, function(req, res, next) {

  const query = req.body.query;

  axios.get(generateQueryUrl(query)).then(response => {

    const topics = response.data.RelatedTopics;
    const responseArray = searchResponseHelper.parse(topics);

    historyDataService.addToHistory(query)

    res.status(200).json({ok: true, array: responseArray});
  }).catch(error => {
    res.status(200).json({ok: false, message: 'Failed to fetch duck duck go data.', additional: error.message});
  });
});

module.exports = router;
