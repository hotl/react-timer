var React = require('react');

// Passed the countdownStatus
// When passed 'started' should render Pause button
// When passed 'paused' should render Start and Clear button
var Controls = React.createClass({

  propTypes: {
      countdownStatus: React.PropTypes.string.isRequired
  },

  render: function() {
    var { countdownStatus } = this.props;
    var renderStartStopButton = () => {
        if (countdownStatus === 'started') {
          return <button className="button secondary">Pause</button>;
        } else if (countdownStatus === 'stopped') {
          return <button className="button primary">Start</button>;
        }
    };

      return (
        <div className="controls">
          {renderStartStopButton()}
          <button className="button alert hollow">Clear</button>
        </div>
      );
  }
});

module.exports = Controls;
