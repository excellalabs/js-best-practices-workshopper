#!/usr/bin/env node

const jsBestPractices = require('workshopper-adventure')({
    appDir: __dirname,
    languages: ['en'],
    header: require('workshopper-adventure/default/header'),
    footer: require('workshopper-adventure/default/footer')
});

jsBestPractices.addAll([
    'BASIC',
    'TDD',
    'FILE STREAM'
]);

module.exports = jsBestPractices;