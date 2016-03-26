import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Winner from './Winner';
import Vote from './Vote';

export const Voting = React.createClass({
  displayName: 'Voting',
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.getIn(['myVote', 'entry']),
    winner: state.get('winner')
  };
}

// return a connected component the wraps the pure component
// actionCreators passed as mapDispatchToProps
export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
