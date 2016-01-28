var Account = function(name, type, balance) {
  this.name = name;
  this.type = type;
  this.balance = balance || 0;
};

module.exports = Account;