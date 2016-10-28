var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
      return {
        totalSeconds: 0,
        timerStatus: 'paused'
      }
  },

  componentDidUpdate: function(prevProps, prevState) {
    var { timerStatus }  = this.state;
    if ( timerStatus !== prevState.timerStatus ) {
      switch (timerStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      var newSeconds = this.state.totalSeconds + 1
      this.setState({
        totalSeconds: newSeconds
      });
    }, 1000);
  },

  handleStatusChange: function(newStatus) {
    console.log(newStatus);
    this.setState({
      timerStatus: newStatus
    });
  },

  render: function() {
    var { totalSeconds, timerStatus } = this.state;
    return (
      <div>
        <h1 className='page-title'>Timer</h1>
        <Clock totalSeconds={totalSeconds}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
