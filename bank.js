var _ = require('lodash');
var Account = require('./account');

var Bank = function(name, founded){
  this.name = name;
  this.founded = founded;
  this.accounts = new Map();
};

Bank.prototype = {
  createAccount: function(name, type){
    var account = new Account(name);
    var id = _.uniqueId();
    this.accounts.set(id, account);
  }
}

module.exports = Bank;