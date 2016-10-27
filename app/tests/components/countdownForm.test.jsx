var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('Countdown Form', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  describe('onSubmit handler', () => {
    it('should call onSetCountdown if valid input', () => {
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownForm));
      countdownForm.refs.seconds.value = '61';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(61);
    });

    it('should not call onSetCountdown if invalid input', () => {
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
      var $el = $(ReactDOM.findDOMNode(countdownForm));
      
      countdownForm.refs.seconds.value = "abc";
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();

      countdownForm.refs.seconds.value = '12/3';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();

    });
  });

});
