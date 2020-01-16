import axios from 'axios'

const HISTORY_URL = '/api/history'

class HistoryService{
  static getHistoryList(){
    return axios.get(HISTORY_URL)
  }
}

export default HistoryService