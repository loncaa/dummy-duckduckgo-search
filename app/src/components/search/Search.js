import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/core/SvgIcon/SvgIcon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  search: {
    marginRight: theme.spacing(1),
  },
}));

const Search = props => {
  const classes = useStyles();

  return (
      <Grid container spacing={2}>
        <Grid item>
          <SearchIcon className={classes.block} color="inherit"/>
        </Grid>
        <Grid item xs>
          <TextField
              onKeyPress={props.handleOnKeyPress}
              onChange={props.handleOnChange}
              fullWidth
              placeholder="What you are searching for..."
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
              }}
              value={props.value}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" className={classes.search}
                  onClick={props.handleOnSubmit}>
            Search
          </Button>
        </Grid>
      </Grid>);
};

export default Search;