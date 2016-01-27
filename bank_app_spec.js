var expect = require('chai').expect;

var Bank = require('./bank');
var Account = require('./account');

describe('Bank', function(){
  it('should have a name and year founded', function(){
    var bank = new Bank('Bank of Zanzibar', 2050);
    expect(bank.name).to.equal('Bank of Zanzibar');
    expect(bank.founded).to.equal(2050);
  });
});

describe('Account', function(){
  it('should have a holder\'s name', function(){
    var account = new Account('Chuck');
    expect(account.name).to.equal('Chuck');
  });
});