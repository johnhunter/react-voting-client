import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.node.isRequired
  },
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
});
