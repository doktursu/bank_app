var _ = require('lodash');
var Account = require('./account');

var Bank = function(name, founded){
  this.name = name;
  this.founded = founded;
  this.accounts = {};
};

Bank.prototype = {
  createAccount: function(name, type){
    var account = new Account(name, type);
    var id = _.uniqueId();
    this.accounts[id] = account;
    return account;
  },
  findAccount: function(value, test){
    var key = test(value);
    return this.accounts[key];
  },
  idForName: function(name){
      var id = _.findKey(this.accounts, function(account){
      return account.name === name;
    });
    return id;
  }
};

module.exports = Bank;