#!/usr/bin/env node

const jsBestPractices = require('workshopper-adventure')({
    appDir: __dirname,
    languages: ['en'],
    header: require('workshopper-adventure/default/header'),
    footer: require('workshopper-adventure/default/footer'),
    commands: require('./helpers/customCommands')
});

jsBestPractices.addAll([
    'basic',
    'tdd',
    'file stream'
]);

module.exports = jsBestPractices;