'use strict';

var rust = require('rust'),
    request = require('superagent');

var loader = require('loader');

module.exports = rust.class({
  getInitialState: function() {
    if (!this.props.target) return {};

    var d = Date.now();
    console.log('Checking', this.props.target, d);
    this.hitEndpoint();

    return {
      start: d,
      status: 'loading ' + this.props.target
    };
  },

  hitEndpoint: function() {

    var url = [
      'https://',
      this.props.target,
      '.herokuapp.com',
      this.props.extension ? '/' + this.props.extension : ''
    ].join('');

    var ctx = this;
    request
      .get(url)
      .end(function(err, res) {
        // Access Control block has no status code
        console.log('response', err, res);
        console.log('took', Date.now() - ctx.state.start);
        ctx.setState({status: 'opening'});
        window.location = url;
      });

  },

  render: function() {
    if (this.state.status) window.document.title = this.state.status;

    return rust.o2(this.props.target ? [
      'lobby-loading',
      ['logo', 'the lobby', ['img', {src: '/icon.png'}]],
      ['h1', this.state.status],
      [loader]
    ] : require('home'));
  }
});
