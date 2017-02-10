'use strict';

module.exports = [
  'lobby-home',

  [require('loader')],

  ['h1', 'the lobby'],

  ['about-section',

   ['br'],
   ['div', {
     style: {
       textAlign: 'center'
     }
   }, 'Welcome to the lobby. Your heroku dyno waiting area.'],
   ['br'],

   ['h3', 'How to:'],

   ['p',
    'Link to ',
    'the lobby',
    ' using this format ',

    ['lobby-url',
     window.location.origin,
     '/',

     ['u', 'your-app-name'],
     [
       'optional',
       '/',
       ['u', 'optional-extension']
     ]
    ],

    'the lobby will then serve as a loading page and redirect to ',

    ['lobby-url',
     'https://',
     ['u', 'your-app-name'],
     '.herokuapp.com',
     [
       'optional',
       '/',
       ['u', 'optional-extension']
     ]
    ],
    ' as soon as it receives a response.']
  ]

];
