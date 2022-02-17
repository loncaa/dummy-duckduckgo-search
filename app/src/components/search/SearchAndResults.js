import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import SearchResults from './SearchResults';
import Search from './Search';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: '25px',
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  }
}));

const SearchAndResults = function(props) {
  const classes = useStyles();

  return (
      <Paper className={classes.paper}>
        <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
          <Toolbar>
            <Search
                value={props.value}
                handleOnKeyPress={props.handleOnKeyPress}
                handleOnSubmit={props.handleOnSubmit}
                handleOnChange={props.handleOnChange}
            />
          </Toolbar>
        </AppBar>
        <SearchResults
            results={props.results}
            loading={props.loading}/>
      </Paper>);
};

export default SearchAndResults;