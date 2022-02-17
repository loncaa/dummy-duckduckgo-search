const fs = require('fs');
const es = require('event-stream');

const HISTORY_LOCATION = 'src\\search_history'

let historyArray = []
class HistoryDataService {

  static loadHistory() {
    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(HISTORY_LOCATION);
      const queries = [];

      readStream.pipe(es.split()).pipe(es.map(line => {
        queries.push(line);
      }));

      readStream.on('error', () => {
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
    fs.appendFile(HISTORY_LOCATION, `\n${query}`, () => {})
    return Promise.resolve(historyArray)
  }
}


module.exports = HistoryDataService