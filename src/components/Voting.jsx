import React from 'react';

export default React.createClass({
  displayName: 'Voting',
  propTypes: {
    pair: React.PropTypes.object.isRequired
  },
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }
});
