'use strict';

var rust = require('rust');

module.exports = rust.class({
  getInitialState: function() {
    return {step: 0};
  },

  componentDidMount: function() {
    this.timer = setInterval(this.tick, 300);
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
  },

  tick: function() {
    this.setState({
      step: (this.state.step + 1) % 50
    });
  },


  render: function() {
    var step = this.state.step;

    var trans = {
      style: {
        transform: 'rotate(' + (step * step * step) + 'deg)'
      }
    };

    return rust.o2([
      'loader',

      ['layer-one', trans],
      ['layer-two', trans],
      ['layer-three', trans]

    ]);
  }
});
