import axios from 'axios'

const SEARCH_DATA_URL = '/api/search'

class SearchService{
  static searchData(query){
    return axios.get(SEARCH_DATA_URL, {params: {q: query}})
  }

  static searchDataPOST(query){
    return axios.post(SEARCH_DATA_URL, {params: query})
  }
}

export default SearchService