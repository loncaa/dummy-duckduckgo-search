import React, {Component} from 'react';
import HistoryItem from './HistoryItem';
import {CircularProgress} from '@material-ui/core';

class History extends Component {

  renderHistoryList = props => {
    return (<div>
      {
        props.history && props.history.length === 0 ?
            'Nothing' :
            props.history.map(h => {
              return (<HistoryItem key={`${h}${Math.random()}`} handleOnClick={() => props.handleQuerySearch(h)} query={h}/>);
            })
      }
    </div>);
  };

  render() {
    return (
        <div>
          <h4>Recently searched</h4>
          {
            this.props.loading ? <CircularProgress/> : this.renderHistoryList(this.props)
          }
        </div>
    );
  }
};

export default History;
