import React from 'react';
import Typography from '@material-ui/core/Typography';

const SearchItem = function(props) {

  return (
      <Typography color="textSecondary" align="justify">
        <p><a href={props.url}>{props.title}</a></p>
      </Typography>
  );
};

export default SearchItem;