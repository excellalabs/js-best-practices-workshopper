#!/usr/bin/env node

var fs = require('fs');

const jsBestPractices = require('workshopper-adventure')({
    appDir: __dirname,
    languages: ['en'],
    header: require('workshopper-adventure/default/header'),
    footer: require('workshopper-adventure/default/footer'),
    commands: require('./helpers/customCommands')
});

function fileError (id, file) {
  var error = new Error(id)
  error.id = id
  error.exerciseFile = file
  error.toString = function () {
    return '[WorkshopperFileError: ' + id + ' @ ' + error.exerciseFile + ']'
  }
  return error
}

jsBestPractices.addAll([
    'get started',
    'decompose balanceManager',
    'decompose changeHandler',
    'decompose productInventory',
    'switch statement',
    'tdd',
    'file stream',
    'bad practices',
    'verify vendingMachine'
]);

module.exports = jsBestPractices;