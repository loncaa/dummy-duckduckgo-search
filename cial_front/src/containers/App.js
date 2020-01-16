import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as searchActions from '../redux/search/searchActions';

import './App.css';
import Grid from '@material-ui/core/Grid';
import History from '../components/history/History';
import Search from './Search';

class App extends Component {

  componentDidMount() {
    if (this.props.search && this.props.search.history && this.props.search.history.length === 0) {
      const {loadSearchHistory} = this.props.searchActions;
      loadSearchHistory();
    }
  }

  handleQuerySearch = (query) => {
    const {searchData} = this.props.searchActions;
    searchData(query);
  };

  render() {
    return (
        <div className="App">
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} sm={3}>
              <History
                  loading={this.props.ui.sidebarLoading}
                  handleQuerySearch={this.handleQuerySearch}
                  history={this.props.search.history}
              />
            </Grid>
            <Grid item xs={11} sm={6} >
              <Search handleQuerySearch={this.handleQuerySearch}/>
            </Grid>
          </Grid>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.Search,
    ui: state.UI,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
