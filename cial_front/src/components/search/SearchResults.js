import {CircularProgress, makeStyles} from '@material-ui/core';
import React from 'react';
import SearchItem from './SearchItem';

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    margin: '40px 16px',
  },
}));

const renderSearchResults = props => {
  return (<div>
    {
      props.results && props.results.length === 0 ?
          'No results' : props.results.map(r => (<SearchItem url={r.url} title={r.title}/>))
    }
  </div>);
};

const SearchResults = props => {
  const classes = useStyles();

  return (
      <div className={classes.contentWrapper}>
        {
          props.loading ? <CircularProgress/> : renderSearchResults(props)
        }
      </div>
  );
};

export default SearchResults;