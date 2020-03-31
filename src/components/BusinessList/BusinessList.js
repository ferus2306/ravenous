import React from 'react';
import './BusinessList.css';
// navigate one step up to find the Business component.
import Business from '../Business/Business';



class BusinessList extends React.Component {

  render(){
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    )
  }
}


export default BusinessList;
