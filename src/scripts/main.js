var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var extern = require('bespoke-extern');

// Bespoke.js
bespoke.from({ parent: '#presentation', slides: 'section' }, [
  classes(),
  scale(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  extern(bespoke)
]);
