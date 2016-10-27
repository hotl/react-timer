var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    return {
      totalSeconds: 0
    };
  },

  propTypes: function() {
    totalSeconds: React.PropTypes.number
  },
  render: function() {
    var { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  },

  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds/60);
    seconds = (seconds < 10) ? ('0' + seconds) : (seconds);
    minutes = (minutes < 10) ? ('0' + minutes) : (minutes);
    return minutes + ':' + seconds;
  }
});

module.exports = Clock;
