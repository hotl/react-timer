var React = require('react');

var CountdownForm = React.createClass({

  render: function() {
    return (
      <div>
          <form onSubmit={this.onSubmit} ref="form" className="countdown-form">
              <input type="text" ref="seconds" placeholder="Enter time in seconds"></input>
              <button className="button expanded">Start</button>
          </form>
      </div>
    );
  },

  onSubmit: function(e) {
    e.preventDefault();
    var seconds = this.refs.seconds.value;

    if (seconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(seconds), 10);
    }
  }
});

module.exports = CountdownForm;
