import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class TeaListContainer extends Component{
  render(){
    const { teas } = this.context.store.getState().timer;

    return(
      <div>
        { Object.keys(teas).map((tea)=><Link key={tea} to={`/tea/${tea}`}>{tea}</Link>) }
      </div>
    )
  }
};

TeaListContainer.contextTypes = {
  store: React.PropTypes.object
};
