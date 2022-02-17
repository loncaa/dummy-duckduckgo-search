import React, {Component} from 'react';
import {connect} from 'react-redux'
import SearchAndResults from '../components/search/SearchAndResults';
import {bindActionCreators} from 'redux';
import * as searchActions from '../redux/search/searchActions';

class Search extends Component{

  handleOnChange = (event) => {
    const {setSearchQuery} = this.props.searchActions
    setSearchQuery(event.target.value)
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.handleQuerySearch(this.props.search.searchQuery)
  }

  handleOnKeyPress = event =>{
    if (event.key === 'Enter') {
      this.props.handleQuerySearch(this.props.search.searchQuery)
    }
  }

  render(){
    const {searchQuery, result} = this.props.search;
    return (
        <SearchAndResults
            loading={this.props.ui.searchLoading}
            results={result}
            value={searchQuery}
            handleOnSubmit={this.handleOnSubmit}
            handleOnChange={this.handleOnChange}
            handleOnKeyPress={this.handleOnKeyPress}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.Search,
    ui: state.UI
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchActions: bindActionCreators(searchActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)