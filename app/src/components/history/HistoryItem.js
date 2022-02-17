import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const HistoryItem = function(props){
  return(
      <Typography color="textSecondary">
        <Button onClick={props.handleOnClick}>{props.query}</Button>
      </Typography>
  )
}

export default HistoryItem