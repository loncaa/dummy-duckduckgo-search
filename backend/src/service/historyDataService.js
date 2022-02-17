const fs = require('fs');
const es = require('event-stream');
const path = require('path');

const HISTORY_LOCATION = '../search_history'

let historyArray = []
class HistoryDataService {
  static historyLocation = path.join(__dirname, HISTORY_LOCATION);

  static loadHistory() {
    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(HistoryDataService.historyLocation);
      const queries = [];

      readStream.pipe(es.split()).pipe(es.map(line => {
        queries.push(line);
      }));

      readStream.on('error', (error) => {
        console.log(error.message);
        reject({ok: false, message: 'Failed to parse history file.'});
      });

      readStream.on('end', () => {
        historyArray = queries
        resolve({ok: true, array: queries});
      });
    });
  }

  static getHistoryArray(){
    return historyArray
  }

  static addToHistory(query){
    historyArray.push(query)
    fs.appendFile(HistoryDataService.historyLocation, `\n${query}`, () => {})
    return Promise.resolve(historyArray)
  }
}


module.exports = HistoryDataService