var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('Button Rendering', () => {
    it('should render a Pause button', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toBe(1);
    });

    it('should render a Start button', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='stopped'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');
      expect($startButton.length).toBe(1);
    });
  });
});