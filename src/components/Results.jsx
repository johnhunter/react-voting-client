import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';

export default React.createClass({
  displayName: 'Results',
  mixins: [PureRenderMixin],
  propTypes: {
    pair: React.PropTypes.any.isRequired,
    tally: React.PropTypes.object.isRequired,
    next: React.PropTypes.func,
    winner: React.PropTypes.string
  },
  getPair: function() {
    return this.props.pair || [];
  },
  getVotes: function(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  },
  render: function() {
    return this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <div className="results">
        <div className="tally">
          {this.getPair().map(entry =>
            <div key={entry} className="entry">
              <h1>{entry}</h1>
              <div className="voteCount">
                {this.getVotes(entry)}
              </div>
            </div>
          )}
        </div>
        <div className="management">
          <button ref="next"
                   className="next"
                   onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>;
  }
});
