'use strict';

var border = 2;
function loader(size, time) {
  return {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    display: 'block',
    height: (size - border) + 'px',
    width: (size - border) + 'px',
    'border-radius': '50%',
    transition: time + ' linear',
    transform: 'rotate(0deg)',
    border: '0px solid transparent',
    'border-top': border + 'px solid black'
  };
}

module.exports = {
  '*': {
    margin: 0,
    padding: 0
  },

  'body': {
    'box-sizing': 'border-box',
    padding: '10px',
    height: '100vh',
    width: '100vw'
  },
  '#app-entry': {
    height: '100%',
    width: '100%',
    'font-family': '"Nunito", Nunito, sans-serif'
  },

  'lobby-home': {
    height: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',

    h1: {
      'font-size': '40px'
    },

    'about-section': {
      display: 'block',
      'max-width': '60ch',

      u: {
        margin: '0 2px',
        padding: '0 2px',
        'background-color': '#ebebeb',
        'text-decoration': 'none'
      },

      'lobby-url': {
        'letter-spacing': '1px',
        display: 'block',
        padding: '8px',
        margin: '8px 0 16px',
        'border-left': '5px solid',
        color: '#4279ff'
      },

      'optional': {
        color: '#999999'
      }
    }
  },

  'lobby-loading': {
    height: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center'

  },

  'loader': {
    margin: '20px',
    'font-size': '36px',
    color: '#444444',
    position: 'relative',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',

    height: '45px',
    width: '45px',

    'layer-one': loader(15, '1s'),
    'layer-two': loader(30, '3s'),
    'layer-three': loader(45, '5s')
  },

  logo: {
    position: 'fixed',
    display: 'flex',
    'align-items': 'center',
    bottom: '16px',
    right: '16px',
    'font-size': '18px',
    color: '#777777',

    img: {
      'margin-left': '8px',
      height: '20px'
    }
  }


};
