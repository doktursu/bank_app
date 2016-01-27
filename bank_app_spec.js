var expect = require('chai').expect;

var Bank = require('./bank');
var Account = require('./account');

describe('Bank', function(){
  beforeEach(function createBank(){
    bank = new Bank('Bank of Zanzibar', 2050);
  })

  it('should have a name and year founded', function(){
    expect(bank.name).to.equal('Bank of Zanzibar');
    expect(bank.founded).to.equal(2050);
  });

  it('should be able to create an account, with a unique id', function(){
    bank.createAccount('Yolanda', 'personal');
    expect(bank.accounts.size).to.equal(1);
  });

});

describe('Account', function(){
  it('should have a holder\'s name, type, and initial balance of 0', function(){
    var account = new Account('Chuck', 'personal');
    expect(account.name).to.equal('Chuck');
    expect(account.type).to.equal('personal');
    expect(account.balance).to.equal(0);
  });
});