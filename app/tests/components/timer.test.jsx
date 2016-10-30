var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {

  });

  describe('Button Rendering', () => {
    it('should render pause button', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      var $el = $(ReactDOM.findDOMNode(timer));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toBe(1);
    });

    it('should render start button', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('paused');
      var $el = $(ReactDOM.findDOMNode(timer));
      var $startButton = $el.find('button:contains(Start)');
      expect($startButton.length).toBe(1);

      timer.handleStatusChange('stopped');
      var $el = $(ReactDOM.findDOMNode(timer));
      var $startButton = $el.find('button:contains(Start)');
      expect($startButton.length).toBe(1);
    });
  });
});
