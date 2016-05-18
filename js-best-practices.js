#!/usr/bin/env node


const workshopper = require('workshopper')
    , path        = require('path')


workshopper({
    name        : 'js-best-practices'
  , title       : 'Javascript Best Practices'
  , exerciseDir : path.join(__dirname, 'exercises')
  , appDir      : __dirname
  , languages   : ['en']
});
